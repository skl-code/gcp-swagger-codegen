# NedapOnsApi.DossierReportWithActionsApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierReportWithActionsAPIReportsWithActions**](DossierReportWithActionsApi.md#dossierReportWithActionsAPIReportsWithActions) | **GET** /v0/dossier/back_channel/authorized/clients/{client_id}/reports_with_actions | Returns ReportsWithActions that have actions created by user or for user&#x27;s expertise

<a name="dossierReportWithActionsAPIReportsWithActions"></a>
# **dossierReportWithActionsAPIReportsWithActions**
> DossierListReportWithActionsList dossierReportWithActionsAPIReportsWithActions(clientId, createdByUser, limit, offset)

Returns ReportsWithActions that have actions created by user or for user&#x27;s expertise

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportWithActionsApi();
let clientId = 789; // Number | The client id for which to get the registrations
let createdByUser = true; // Boolean | True for the user's created reports, false for actions for my expertise
let limit = 56; // Number | Limit
let offset = 56; // Number | Offset

apiInstance.dossierReportWithActionsAPIReportsWithActions(clientId, createdByUser, limit, offset, (error, data, response) => {
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
 **clientId** | **Number**| The client id for which to get the registrations | 
 **createdByUser** | **Boolean**| True for the user&#x27;s created reports, false for actions for my expertise | 
 **limit** | **Number**| Limit | 
 **offset** | **Number**| Offset | 

### Return type

[**DossierListReportWithActionsList**](DossierListReportWithActionsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

