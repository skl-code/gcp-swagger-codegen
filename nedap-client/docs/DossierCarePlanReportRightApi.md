# NedapOnsApi.DossierCarePlanReportRightApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierCarePlanReportRightAPIGetReportRightsForMostRecentReportByClientAndEmployee**](DossierCarePlanReportRightApi.md#dossierCarePlanReportRightAPIGetReportRightsForMostRecentReportByClientAndEmployee) | **GET** /v0/administration/dossier/care_plan_report_rights/last_report | Return the care plan report rights of the most recent report created by the given employee and for the given client.

<a name="dossierCarePlanReportRightAPIGetReportRightsForMostRecentReportByClientAndEmployee"></a>
# **dossierCarePlanReportRightAPIGetReportRightsForMostRecentReportByClientAndEmployee**
> DossierListCarePlanReportRightList dossierCarePlanReportRightAPIGetReportRightsForMostRecentReportByClientAndEmployee(clientId, employeeId)

Return the care plan report rights of the most recent report created by the given employee and for the given client.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierCarePlanReportRightApi();
let clientId = 789; // Number | id of client for whom the report is created
let employeeId = 789; // Number | id of employee that created the report

apiInstance.dossierCarePlanReportRightAPIGetReportRightsForMostRecentReportByClientAndEmployee(clientId, employeeId, (error, data, response) => {
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
 **clientId** | **Number**| id of client for whom the report is created | 
 **employeeId** | **Number**| id of employee that created the report | 

### Return type

[**DossierListCarePlanReportRightList**](DossierListCarePlanReportRightList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

