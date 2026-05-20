import Map "mo:core/Map";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import Time "mo:core/Time";
import Types "types/common";
import PortfolioMixin "mixins/portfolio-api";
import ReviewsMixin "mixins/reviews-api";
import AppointmentsMixin "mixins/appointments-api";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinObjectStorage();

  let portfolioItems = Map.empty<Nat, Types.PortfolioItem>();
  let portfolioState = { var nextId : Nat = 0 };
  include PortfolioMixin(accessControlState, portfolioItems, portfolioState);

  let reviews = Map.empty<Nat, Types.Review>();
  let reviewsState = { var nextId : Nat = 0 };
  include ReviewsMixin(accessControlState, reviews, reviewsState);

  let appointments = Map.empty<Nat, Types.Appointment>();
  let appointmentsState = { var nextId : Nat = 0 };
  include AppointmentsMixin(accessControlState, appointments, appointmentsState);

  // Seed sample data on first deploy
  do {
    let sampleReviews : [(Types.ReviewInput, Nat)] = [
      ({ clientName = "Alex Johnson"; reviewText = "Kryto Studio delivered an outstanding web app. Clean code, pixel-perfect design."; rating = 5; serviceType = #webAppDev }, 0),
      ({ clientName = "Maria Santos"; reviewText = "Incredible video editing work. My product launch video exceeded all expectations!"; rating = 5; serviceType = #videoEditing }, 1),
      ({ clientName = "David Lee"; reviewText = "The brand identity Kryto designed is exactly what we envisioned. Highly professional."; rating = 5; serviceType = #graphicsDesign }, 2),
      ({ clientName = "Sophie Chen"; reviewText = "Stunning UI/UX that boosted our app engagement by 40%. Exceptional attention to detail."; rating = 5; serviceType = #uiUxDesign }, 3),
    ];
    for ((input, _) in sampleReviews.vals()) {
      let id = reviewsState.nextId;
      reviewsState.nextId += 1;
      let review : Types.Review = {
        id;
        clientName = input.clientName;
        reviewText = input.reviewText;
        rating = input.rating;
        serviceType = input.serviceType;
        createdAt = Time.now();
      };
      reviews.add(id, review);
    };

    let samplePortfolio : [Types.PortfolioItemInput] = [
      { title = "E-Commerce Platform"; description = "Full-stack online store with payment integration and admin dashboard."; serviceType = #webAppDev; mediaType = #link; url = "https://example.com/ecommerce"; videoBlob = null; thumbnailUrl = ?"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800" },
      { title = "Brand Promo Video"; description = "Dynamic 60-second brand awareness video for a product launch campaign."; serviceType = #videoEditing; mediaType = #link; url = "https://example.com/promo"; videoBlob = null; thumbnailUrl = ?"https://images.unsplash.com/photo-1536240478700-b869ad10e128?w=800" },
      { title = "Corporate Identity"; description = "Complete brand identity: logo, color palette, typography, and style guide."; serviceType = #graphicsDesign; mediaType = #link; url = "https://example.com/brand"; videoBlob = null; thumbnailUrl = ?"https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800" },
      { title = "FinTech Mobile App UI"; description = "Intuitive and secure mobile banking UI with dark mode and micro-animations."; serviceType = #uiUxDesign; mediaType = #link; url = "https://example.com/fintech"; videoBlob = null; thumbnailUrl = ?"https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800" },
    ];
    for (input in samplePortfolio.vals()) {
      let id = portfolioState.nextId;
      portfolioState.nextId += 1;
      let item : Types.PortfolioItem = {
        id;
        title = input.title;
        description = input.description;
        serviceType = input.serviceType;
        mediaType = input.mediaType;
        url = input.url;
        videoBlob = input.videoBlob;
        thumbnailUrl = input.thumbnailUrl;
        createdAt = Time.now();
      };
      portfolioItems.add(id, item);
    };
  };
};

