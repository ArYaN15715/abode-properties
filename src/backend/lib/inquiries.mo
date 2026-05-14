import Debug "mo:core/Debug";
import List "mo:core/List";
import Types "../types/inquiries";

module {
  public type InquiryList = List.List<Types.Inquiry>;

  public func submit(
    inquiries : InquiryList,
    state : { var nextId : Nat },
    fullName : Text,
    email : Text,
    phone : Text,
    propertyType : Types.PropertyType,
    message : Text,
    now : Int,
  ) : Types.Inquiry {
    Debug.todo()
  };

  public func list(inquiries : InquiryList) : [Types.Inquiry] {
    Debug.todo()
  };

  public func count(inquiries : InquiryList) : Nat {
    Debug.todo()
  };
};
