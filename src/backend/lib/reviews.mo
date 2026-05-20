import Map "mo:core/Map";
import Time "mo:core/Time";
import Types "../types/common";

module {
  public func listAll(reviews : Map.Map<Nat, Types.Review>) : [Types.Review] {
    reviews.values().toArray();
  };

  public func add(reviews : Map.Map<Nat, Types.Review>, state : { var nextId : Nat }, input : Types.ReviewInput) : Types.Review {
    let id = state.nextId;
    state.nextId += 1;
    let review : Types.Review = {
      id;
      clientName = input.clientName;
      reviewText = input.reviewText;
      rating = input.rating;
      serviceType = input.serviceType;
      createdAt = Time.now();
    };
    reviews.add(id, review);
    review;
  };

  public func update(reviews : Map.Map<Nat, Types.Review>, id : Nat, input : Types.ReviewInput) : { #ok; #err : Text } {
    switch (reviews.get(id)) {
      case null { #err("Review not found") };
      case (?existing) {
        let updated : Types.Review = {
          existing with
          clientName = input.clientName;
          reviewText = input.reviewText;
          rating = input.rating;
          serviceType = input.serviceType;
        };
        reviews.add(id, updated);
        #ok;
      };
    };
  };

  public func remove(reviews : Map.Map<Nat, Types.Review>, id : Nat) : { #ok; #err : Text } {
    switch (reviews.get(id)) {
      case null { #err("Review not found") };
      case (?_) {
        reviews.remove(id);
        #ok;
      };
    };
  };
};
