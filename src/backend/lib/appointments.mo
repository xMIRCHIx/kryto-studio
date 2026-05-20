import Array "mo:core/Array";
import Map "mo:core/Map";
import Time "mo:core/Time";
import Types "../types/common";

module {
  public func listAll(appointments : Map.Map<Nat, Types.Appointment>) : [Types.Appointment] {
    appointments.values().toArray();
  };

  public func submit(appointments : Map.Map<Nat, Types.Appointment>, state : { var nextId : Nat }, input : Types.AppointmentInput) : Types.Appointment {
    let id = state.nextId;
    state.nextId += 1;
    let appt : Types.Appointment = {
      id;
      name = input.name;
      phone = input.phone;
      email = input.email;
      serviceType = input.serviceType;
      dateTime = input.dateTime;
      projectDescription = input.projectDescription;
      status = #pending;
      createdAt = Time.now();
    };
    appointments.add(id, appt);
    appt;
  };

  public func updateStatus(appointments : Map.Map<Nat, Types.Appointment>, id : Nat, status : Types.AppointmentStatus) : { #ok; #err : Text } {
    switch (appointments.get(id)) {
      case null { #err("Appointment not found") };
      case (?existing) {
        let updated : Types.Appointment = { existing with status };
        appointments.add(id, updated);
        #ok;
      };
    };
  };
};
