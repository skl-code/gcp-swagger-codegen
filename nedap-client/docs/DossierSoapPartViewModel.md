# NedapOnsApi.DossierSoapPartViewModel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **String** | Dutch or English language dependent name of the SOAP part | 
**comment** | **String** | Text of the SOAP part. It is present only if the current employee is allowed to see this SOAP part. | [optional] 
**visible** | **Boolean** | Set to &#x60;true&#x60; if the employee is allowed to see this SOAP part.  If set to &#x60;false&#x60; then the &#x60;comment&#x60; attribute is empty but list of &#x60;authorizations&#x60; is still visible.  It means that an employee cannot see the comment but they still can see list of expertise profiles and groups who are allowed to see the comment.  | 
**confidential** | **Boolean** | When set to &#x60;true&#x60; then this report is not public and can only be seen by employees with proper level of authorization (see the &#x60;authorizations&#x60; property in this model)  | 
**authorizations** | [**DossierReportAuthorizationsViewModel**](DossierReportAuthorizationsViewModel.md) |  | [optional] 
