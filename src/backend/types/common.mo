import Storage "mo:caffeineai-object-storage/Storage";

module {
  public type ServiceType = {
    #webAppDev;
    #videoEditing;
    #graphicsDesign;
    #uiUxDesign;
  };

  public type MediaType = {
    #link;
    #video;
  };

  public type AppointmentStatus = {
    #pending;
    #confirmed;
    #cancelled;
  };

  public type PortfolioItem = {
    id : Nat;
    title : Text;
    description : Text;
    serviceType : ServiceType;
    mediaType : MediaType;
    url : Text;
    videoBlob : ?Storage.ExternalBlob;
    thumbnailUrl : ?Text;
    createdAt : Int;
  };

  public type PortfolioItemInput = {
    title : Text;
    description : Text;
    serviceType : ServiceType;
    mediaType : MediaType;
    url : Text;
    videoBlob : ?Storage.ExternalBlob;
    thumbnailUrl : ?Text;
  };

  public type Review = {
    id : Nat;
    clientName : Text;
    reviewText : Text;
    rating : Nat;
    serviceType : ServiceType;
    createdAt : Int;
  };

  public type ReviewInput = {
    clientName : Text;
    reviewText : Text;
    rating : Nat;
    serviceType : ServiceType;
  };

  public type Appointment = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    serviceType : ServiceType;
    dateTime : Text;
    projectDescription : Text;
    status : AppointmentStatus;
    createdAt : Int;
  };

  public type AppointmentInput = {
    name : Text;
    phone : Text;
    email : Text;
    serviceType : ServiceType;
    dateTime : Text;
    projectDescription : Text;
  };
};
