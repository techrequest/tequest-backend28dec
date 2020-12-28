Hello testers!

For our project, we're working on a platform that allows people to order any kind of technician/handyman for a variety of job categories.

Our 'products' are the requests that people send for jobs. That contain an outline of the information needed for service providers to provide the service.

Our mongoDb collections are named:
users
tech_requests

Notes on testing:

1. In order for the update function to work properly, we are requiring a complete submission of the user information and tech information forms. This means that all fields must be provided otherwise mongoDb will update forms with null values instead of retaining existing info in the document.

For User please provide the following when testing '/update':

firstName:
lastName: 
email: 
phoneNumber:
addressLine1: 
addressLine2: 
addressLine3: 
city: 
state: 
zipCode: 
country: 
preferredTime: 
isUnderage: 

For tech_requests please provide the following when testing '/update':

jobTitle: 
jobDescription: 
country: 
state: 
jobCity: 
addressLine1:
amount: 
contactName:
contactNumber: 
contactEmail: 
moreDetails: 