import List "mo:core/List";
import Types "types/inquiries";
import InquiryLib "lib/inquiries";
import InquiriesApi "mixins/inquiries-api";

actor {
  let inquiries = List.empty<Types.Inquiry>();
  let state = { var nextId : Nat = 0 };
  include InquiriesApi(inquiries, state);
};

