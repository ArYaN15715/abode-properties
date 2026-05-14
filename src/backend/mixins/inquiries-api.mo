import Debug "mo:core/Debug";
import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/inquiries";
import InquiryLib "../lib/inquiries";

mixin (
  inquiries : InquiryLib.InquiryList,
  state : { var nextId : Nat },
) {
  public shared func submitInquiry(
    fullName : Text,
    email : Text,
    phone : Text,
    propertyType : Types.PropertyType,
    message : Text,
  ) : async Types.Inquiry {
    Debug.todo()
  };

  public query func listInquiries() : async [Types.Inquiry] {
    Debug.todo()
  };

  public query func getInquiryCount() : async Nat {
    Debug.todo()
  };
};
