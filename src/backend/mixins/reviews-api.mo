import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Types "../types/common";
import ReviewsLib "../lib/reviews";

mixin (
  accessControlState : AccessControl.AccessControlState,
  reviews : Map.Map<Nat, Types.Review>,
  reviewsState : { var nextId : Nat },
) {
  public query func getReviews() : async [Types.Review] {
    ReviewsLib.listAll(reviews);
  };

  public shared ({ caller }) func addReview(review : Types.ReviewInput) : async { #ok : Nat; #err : Text } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add reviews");
    };
    let newReview = ReviewsLib.add(reviews, reviewsState, review);
    #ok(newReview.id);
  };

  public shared ({ caller }) func updateReview(id : Nat, review : Types.ReviewInput) : async { #ok; #err : Text } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update reviews");
    };
    ReviewsLib.update(reviews, id, review);
  };

  public shared ({ caller }) func deleteReview(id : Nat) : async { #ok; #err : Text } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete reviews");
    };
    ReviewsLib.remove(reviews, id);
  };
};
