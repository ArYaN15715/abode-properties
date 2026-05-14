module {
  public type PropertyType = {
    #Residential;
    #Commercial;
    #Retail;
    #Investment;
  };

  public type Inquiry = {
    id : Nat;
    fullName : Text;
    email : Text;
    phone : Text;
    propertyType : PropertyType;
    message : Text;
    createdAt : Int;
  };
};
