decribe('Contact', function() {
  it("creates a new contact with specifications", function() {
    var testContact = new Contact("Julianna", "Green");
    expect(testContact.firstName).to.equal("Julianna");
    expect(testContact.lastName).to.equal("Green");
    expect(testContact.addresses).to.eql([]);
  });
});
