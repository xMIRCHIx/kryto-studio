import Array "mo:core/Array";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Types "../types/common";

module {
  public func listAll(items : Map.Map<Nat, Types.PortfolioItem>) : [Types.PortfolioItem] {
    items.values().toArray();
  };

  public func listByService(items : Map.Map<Nat, Types.PortfolioItem>, serviceType : Types.ServiceType) : [Types.PortfolioItem] {
    items.values().filter(func(item : Types.PortfolioItem) : Bool { item.serviceType == serviceType }).toArray();
  };

  public func add(items : Map.Map<Nat, Types.PortfolioItem>, state : { var nextId : Nat }, input : Types.PortfolioItemInput) : Types.PortfolioItem {
    let id = state.nextId;
    state.nextId += 1;
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
    items.add(id, item);
    item;
  };

  public func update(items : Map.Map<Nat, Types.PortfolioItem>, id : Nat, input : Types.PortfolioItemInput) : { #ok; #err : Text } {
    switch (items.get(id)) {
      case null { #err("Portfolio item not found") };
      case (?existing) {
        let updated : Types.PortfolioItem = {
          existing with
          title = input.title;
          description = input.description;
          serviceType = input.serviceType;
          mediaType = input.mediaType;
          url = input.url;
          videoBlob = input.videoBlob;
          thumbnailUrl = input.thumbnailUrl;
        };
        items.add(id, updated);
        #ok;
      };
    };
  };

  public func remove(items : Map.Map<Nat, Types.PortfolioItem>, id : Nat) : { #ok; #err : Text } {
    switch (items.get(id)) {
      case null { #err("Portfolio item not found") };
      case (?_) {
        items.remove(id);
        #ok;
      };
    };
  };
};
