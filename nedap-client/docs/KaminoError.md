# NedapOnsApi.KaminoError

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **String** | Machine-parseable error code.  At least the following errors can be returned: * &#x60;401 Unauthorized: token_missing&#x60; * &#x60;401 Unauthorized: token_unauthorized&#x60; * &#x60;401 Unauthorized: token_expired&#x60; * &#x60;401 Unauthorized: token_missing&#x60; * &#x60;403 Forbidden: employee_without_team&#x60; * &#x60;404 Not Found: not_found&#x60; * &#x60;422 Unprocessable Entity: validation_failed&#x60; * &#x60;500 Internal Server Error: internal_server_error&#x60; * &#x60;503 Service Unavailable: service_unavailable&#x60;  | 
**message** | **String** | Human readable message, giving more details about the error. These messages might change and may _never_ be shown to users. | 
**params** | [**[KaminoErrorParam]**](KaminoErrorParam.md) | Any params attached to this error. For instance an array of fields which failed validation. | [optional] 
