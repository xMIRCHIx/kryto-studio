import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Types "../types/common";
import PortfolioLib "../lib/portfolio";

mixin (
  accessControlState : AccessControl.AccessControlState,
  portfolioItems : Map.Map<Nat, Types.PortfolioItem>,
  portfolioState : { var nextId : Nat },
) {
  public query func getPortfolioItems() : async [Types.PortfolioItem] {
    PortfolioLib.listAll(portfolioItems);
  };

  public query func getPortfolioByService(serviceType : Types.ServiceType) : async [Types.PortfolioItem] {
    PortfolioLib.listByService(portfolioItems, serviceType);
  };

  public shared ({ caller }) func addPortfolioItem(item : Types.PortfolioItemInput) : async { #ok : Nat; #err : Text } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can add portfolio items");
    };
    let newItem = PortfolioLib.add(portfolioItems, portfolioState, item);
    #ok(newItem.id);
  };

  public shared ({ caller }) func updatePortfolioItem(id : Nat, item : Types.PortfolioItemInput) : async { #ok; #err : Text } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update portfolio items");
    };
    PortfolioLib.update(portfolioItems, id, item);
  };

  public shared ({ caller }) func deletePortfolioItem(id : Nat) : async { #ok; #err : Text } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can delete portfolio items");
    };
    PortfolioLib.remove(portfolioItems, id);
  };
};
