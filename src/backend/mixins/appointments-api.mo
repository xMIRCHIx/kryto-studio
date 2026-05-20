import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Types "../types/common";
import AppointmentsLib "../lib/appointments";

mixin (
  accessControlState : AccessControl.AccessControlState,
  appointments : Map.Map<Nat, Types.Appointment>,
  appointmentsState : { var nextId : Nat },
) {
  public shared func submitAppointment(appointment : Types.AppointmentInput) : async { #ok : Nat; #err : Text } {
    let newAppt = AppointmentsLib.submit(appointments, appointmentsState, appointment);
    #ok(newAppt.id);
  };

  public query ({ caller }) func getAppointments() : async [Types.Appointment] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can view appointments");
    };
    AppointmentsLib.listAll(appointments);
  };

  public shared ({ caller }) func updateAppointmentStatus(id : Nat, status : Types.AppointmentStatus) : async { #ok; #err : Text } {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can update appointment status");
    };
    AppointmentsLib.updateStatus(appointments, id, status);
  };
};
