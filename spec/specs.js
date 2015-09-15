describe('Contact', function() {
  it("creates a new contact with specifications", function() {
    var testContact = new Contact("Julianna", "Green");
    expect(testContact.firstName).to.equal("Julianna");
    expect(testContact.lastName).to.equal("Green");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Alyssa", "Horrocks");
    expect(testContact.fullName).to.equal("Alyssa Horrocks");
  });
});

describe('Address', function() {
  it("creates a new address with the given specifications", function() {
    var testAddress = new Address("123 Fabulous St", "Portland", "OR");
    expect(testAddress.street).to.equal("123 Fabulous St");
    expect(testAddress.city).to.equal("Portland");
    expect(testAddress.state).to.equal("OR");
  });

  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("30 Jarnaul Ave", "Asheville", "NC");
    expect(testAddress.fullAddress()).to.equal("30 Jarnaul Ave, Asheville, NC");
  });
});
