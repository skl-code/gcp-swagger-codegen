# NedapOnsApi.ZorgmailModuleDiagnosticProcedureApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zorgmailModuleDiagnosticProcedureAPISearch**](ZorgmailModuleDiagnosticProcedureApi.md#zorgmailModuleDiagnosticProcedureAPISearch) | **GET** /v0/zorgmail_connector/clients/{client_id}/diagnostic_procedures | Searches for diagnostic procedures.

<a name="zorgmailModuleDiagnosticProcedureAPISearch"></a>
# **zorgmailModuleDiagnosticProcedureAPISearch**
> ZorgmailModuleDiagnosticProcedureSearchResult zorgmailModuleDiagnosticProcedureAPISearch(clientId, opts)

Searches for diagnostic procedures.

Retrieve DiagnosticProcedureReports (lab results) for a particular client. This is the source for the lab results displayed in the Dossier application and medical overview

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.ZorgmailModuleDiagnosticProcedureApi();
let clientId = 789; // Number | 
let opts = { 
  'offset': 56, // Number | 
  'limit': 56, // Number | 
  'includeReports': true // Boolean | 
};
apiInstance.zorgmailModuleDiagnosticProcedureAPISearch(clientId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **Number**|  | 
 **offset** | **Number**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **includeReports** | **Boolean**|  | [optional] 

### Return type

[**ZorgmailModuleDiagnosticProcedureSearchResult**](ZorgmailModuleDiagnosticProcedureSearchResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

