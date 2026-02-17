# NedapOnsApi.NutsConsent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**clientId** | **Number** | Reference to the client | [optional] 
**purpose** | **String** | A description about the consent, readable for professional and patient | [optional] 
**careProviderId** | **Number** | A reference to the care provider, eg: a GP | [optional] 
**policy** | **String** | The policy or outcome of the consent question: PERMIT_ALL, DENY_ALL or empty, which assumes DENY_ALL but also the exceptions must be ignored | [optional] 
**category** | **String** | CONTACT, MEDICAL, MENTAL, in the future it might refer to FHIR (http://hl7.org/fhir/ValueSet/consent-category) | [optional] 
**documentId** | **Number** | The latest signed document which is the proof for the consent | [optional] 
**signedDocumentIds** | **[Number]** | The signed documents which are the proof for the consent | [optional] 
**validFrom** | **Date** | period start where this consent is valid from, inclusive | [optional] 
**validTo** | **Date** | period end where this consent is valid to, exclusive | [optional] 
**party** | **String** | The party the data may be shared with. Possible options include: - \&quot;MEDIQUEST\&quot; - \&quot;QUALIZORG\&quot; - \&quot;GENERAL_PRACTITIONERS\&quot; - \&quot;PHARMACISTS\&quot; | [optional] 
**goal** | **String** | Why this specific set of data is shared. Possible options include: - \&quot;NOTIFICATION\&quot; - \&quot;SURVEY\&quot; - \&quot;EXECUTION_OF_CARE\&quot; - \&quot;LDF\&quot; | [optional] 
**subject** | **String** | The set of data to be shared. Possible options include: - \&quot;EMAIL\&quot; - \&quot;POSTAL_ADDRESS\&quot; - \&quot;MOBILE_PHONE_SMS\&quot; - \&quot;MEDICAL_INFORMATION\&quot; - \&quot;TREATMENT_EPISODE\&quot; - \&quot;PREM_RESULT\&quot; | [optional] 
