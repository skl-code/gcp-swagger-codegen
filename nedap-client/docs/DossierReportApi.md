# NedapOnsApi.DossierReportApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dossierReportAPIAuthorizedCreate**](DossierReportApi.md#dossierReportAPIAuthorizedCreate) | **POST** /v0/dossier/back_channel/authorized/clients/{client_id}/reports | Create Report. Authorization is done in dossier controller this points to.
[**dossierReportAPIAuthorizedSearchByClient**](DossierReportApi.md#dossierReportAPIAuthorizedSearchByClient) | **GET** /v0/dossier/back_channel/authorized/clients/{client_id}/reports/search_by_client | Return Reports, filtered by params Authorization is done in dossier controller this points to.
[**dossierReportAPIAuthorizedSearchByClientWithUpdatedSince**](DossierReportApi.md#dossierReportAPIAuthorizedSearchByClientWithUpdatedSince) | **GET** /v0/dossier/back_channel/authorized/clients/{client_id}/reports/search_by_client_with_updated_since | Return Reports with updated since option, filtered by params Authorization is done in dossier controller this points to.
[**dossierReportAPIAuthorizedUnfilteredSearchByClient**](DossierReportApi.md#dossierReportAPIAuthorizedUnfilteredSearchByClient) | **GET** /v0/dossier/back_channel/unauthorized/clients/{client_id}/reports/unfiltered_search_by_client | Return Reports Unfiltered, filtered by params Authorization is done in dossier controller this points to.
[**dossierReportAPIAuthorizedUpdate**](DossierReportApi.md#dossierReportAPIAuthorizedUpdate) | **PUT** /v0/dossier/back_channel/authorized/clients/{client_id}/reports/{report_id} | Update Report. Authorization is done in dossier controller this points to.
[**dossierReportAPIById**](DossierReportApi.md#dossierReportAPIById) | **GET** /v0/administration/dossier/reports/{id} | Return the Report corresponding to the given id
[**dossierReportAPIByUuid**](DossierReportApi.md#dossierReportAPIByUuid) | **GET** /v0/administration/dossier/reports/by_uuid/{uuid} | Return the Report corresponding to the given uuid
[**dossierReportAPIChildrenByReportId**](DossierReportApi.md#dossierReportAPIChildrenByReportId) | **GET** /v0/administration/dossier/reports/{report_id}/children | Returns all the reactions for a given report
[**dossierReportAPICreate**](DossierReportApi.md#dossierReportAPICreate) | **POST** /v0/administration/dossier/reports | Create Report
[**dossierReportAPICreateSoapReport**](DossierReportApi.md#dossierReportAPICreateSoapReport) | **POST** /v0/administration/dossier/reports/soap/report | Create a SOAP report where each soap-part (optionally) has it&#x27;s own authorization To make use of the per-soap-part authorization model make sure to fill each of the S-O-A-P parts of a SOAP report and put them in the SoapReportEntries nested in the Report.
[**dossierReportAPIDelete**](DossierReportApi.md#dossierReportAPIDelete) | **DELETE** /v0/administration/dossier/reports/{id} | Deletes the Report with given id
[**dossierReportAPIFindByCarePlanEntry**](DossierReportApi.md#dossierReportAPIFindByCarePlanEntry) | **GET** /v0/administration/dossier/reports/by_care_plan_entry/{care_plan_entry_id} | Returns all reports filtered by care plan entry with HTML escaping applied to text fields.
[**dossierReportAPIFindByCarePlanEntryUnescaped**](DossierReportApi.md#dossierReportAPIFindByCarePlanEntryUnescaped) | **GET** /v0/administration/dossier/reports/by_care_plan_entry_unescaped/{care_plan_entry_id} | Returns all reports filtered by care plan entry without applying HTML esaping.
[**dossierReportAPIFindByDate**](DossierReportApi.md#dossierReportAPIFindByDate) | **GET** /v0/administration/dossier/reports/by_date/{valid_from}...{valid_to} | Returns all reports filtered by date.
[**dossierReportAPIFindByDemand**](DossierReportApi.md#dossierReportAPIFindByDemand) | **GET** /v0/administration/dossier/reports/by_demand/{demand_id} | Returns all reports filtered by demand id.
[**dossierReportAPIFindByEpisode**](DossierReportApi.md#dossierReportAPIFindByEpisode) | **GET** /v0/administration/dossier/reports/by_episode/{episode_id} | Returns all reports filtered by episode id.
[**dossierReportAPIFindByNextDossierReportLink**](DossierReportApi.md#dossierReportAPIFindByNextDossierReportLink) | **GET** /v0/dossier/back_channel/unauthorized/reports/by_next_dossier_report_link/{report_link_id} | Returns report by next dossier report link
[**dossierReportAPIFindByReportLink**](DossierReportApi.md#dossierReportAPIFindByReportLink) | **GET** /v0/administration/dossier/reports/by_report_link/{report_link_id} | Returns all reports filtered by report link id.
[**dossierReportAPIFindByRestrictiveMeasure**](DossierReportApi.md#dossierReportAPIFindByRestrictiveMeasure) | **GET** /v0/administration/dossier/reports/by_restrictive_measure/{restrictive_measure_id} | Returns all reports filtered by restrictive measures id.
[**dossierReportAPILastReportAuthorizationsByClientIdAndEmployeeId**](DossierReportApi.md#dossierReportAPILastReportAuthorizationsByClientIdAndEmployeeId) | **GET** /v0/administration/dossier/reports/last_report_authorizations | Return the child Reports of a Report corresponding to the given id.
[**dossierReportAPISearchByClient**](DossierReportApi.md#dossierReportAPISearchByClient) | **GET** /v0/administration/dossier/reports/search_by_client | Searches for Reports for the Client (corresponding to the given id)
[**dossierReportAPIStreamAll**](DossierReportApi.md#dossierReportAPIStreamAll) | **GET** /v0/xstream/reports/data | Return all Report models in a streaming manner
[**dossierReportAPIStreamUpdates**](DossierReportApi.md#dossierReportAPIStreamUpdates) | **GET** /v0/xstream/reports/updates | Return all Report models which were updated since the date given in the request
[**dossierReportAPIUpdate**](DossierReportApi.md#dossierReportAPIUpdate) | **PUT** /v0/administration/dossier/reports/{id} | Updates the given Report
[**dossierReportAPIUpdateSoapReport**](DossierReportApi.md#dossierReportAPIUpdateSoapReport) | **PUT** /v0/administration/dossier/reports/soap/report/{id} | Updates a SOAP report where each soap-part (optionally) has it&#x27;s own authorization To make use of the per-soap-part authorization model make sure to fill each of the S-O-A-P parts of a SOAP report and put them in the SoapReportEntries nested in the Report.
[**dossierReportAPIWithActions**](DossierReportApi.md#dossierReportAPIWithActions) | **GET** /v0/dossier/back_channel/authorized/reports/with_actions | Return reports that have actions created by user or for user&#x27;s expertise
[**dossierReportAPIWithActionsSummary**](DossierReportApi.md#dossierReportAPIWithActionsSummary) | **GET** /v0/dossier/back_channel/authorized/reports/with_actions_summary | Return a count of reports that have actions created by user or for user&#x27;s expertise

<a name="dossierReportAPIAuthorizedCreate"></a>
# **dossierReportAPIAuthorizedCreate**
> DossierReport dossierReportAPIAuthorizedCreate(body, clientId)

Create Report. Authorization is done in dossier controller this points to.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let body = new NedapOnsApi.DossierReport(); // DossierReport | 
let clientId = 789; // Number | id

apiInstance.dossierReportAPIAuthorizedCreate(body, clientId, (error, data, response) => {
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
 **body** | [**DossierReport**](DossierReport.md)|  | 
 **clientId** | **Number**| id | 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierReportAPIAuthorizedSearchByClient"></a>
# **dossierReportAPIAuthorizedSearchByClient**
> DossierListReportList dossierReportAPIAuthorizedSearchByClient(clientId, reportType, opts)

Return Reports, filtered by params Authorization is done in dossier controller this points to.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let clientId = 789; // Number | which we want to search reports for
let reportType = [3.4]; // [Number] | list of types to filter on
let opts = { 
  'keyword': "keyword_example", // String | a text search term
  'filter': new NedapOnsApi.DossierReportFilter(), // DossierReportFilter | the type of information to filter on
  'educationId': 789, // Number | filters on reports of which the author has a specific employee
  'showHidden': true, // Boolean | shows hidden reports only has effect for the author or application managers
  'validFrom': "validFrom_example", // String | start search date
  'validTo': "validTo_example", // String | end search date
  'demandId': 789, // Number | filters on reports to include only those related to a specific demand
  'entryId': 789, // Number | filters on reports to include only those related to a specific care plan entry
  'episodeId': 789, // Number | filters on reports to include only those related to a specific episode
  'restrictiveMeasureId': 789, // Number | filters on reports to include only those related to a specific restrictictive measure
  'reportTypesWithComments': [3.4], // [Number] | filters on reports that have comments
  'onlyOwnReports': true, // Boolean | filters on reports written by the user
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.dossierReportAPIAuthorizedSearchByClient(clientId, reportType, opts, (error, data, response) => {
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
 **clientId** | **Number**| which we want to search reports for | 
 **reportType** | [**[Number]**](Number.md)| list of types to filter on | 
 **keyword** | **String**| a text search term | [optional] 
 **filter** | [**DossierReportFilter**](.md)| the type of information to filter on | [optional] 
 **educationId** | **Number**| filters on reports of which the author has a specific employee | [optional] 
 **showHidden** | **Boolean**| shows hidden reports only has effect for the author or application managers | [optional] 
 **validFrom** | **String**| start search date | [optional] 
 **validTo** | **String**| end search date | [optional] 
 **demandId** | **Number**| filters on reports to include only those related to a specific demand | [optional] 
 **entryId** | **Number**| filters on reports to include only those related to a specific care plan entry | [optional] 
 **episodeId** | **Number**| filters on reports to include only those related to a specific episode | [optional] 
 **restrictiveMeasureId** | **Number**| filters on reports to include only those related to a specific restrictictive measure | [optional] 
 **reportTypesWithComments** | [**[Number]**](Number.md)| filters on reports that have comments | [optional] 
 **onlyOwnReports** | **Boolean**| filters on reports written by the user | [optional] 
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIAuthorizedSearchByClientWithUpdatedSince"></a>
# **dossierReportAPIAuthorizedSearchByClientWithUpdatedSince**
> DossierListReportList dossierReportAPIAuthorizedSearchByClientWithUpdatedSince(clientId, reportType, opts)

Return Reports with updated since option, filtered by params Authorization is done in dossier controller this points to.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let clientId = 789; // Number | which we want to search reports for
let reportType = [3.4]; // [Number] | list of types to filter on
let opts = { 
  'keyword': "keyword_example", // String | a text search term
  'filter': new NedapOnsApi.DossierReportFilter(), // DossierReportFilter | the type of information to filter on
  'educationId': 789, // Number | filters on reports of which the author has a specific employee
  'showHidden': true, // Boolean | shows hidden reports only has effect for the author or application managers
  'validFrom': "validFrom_example", // String | start search date
  'validTo': "validTo_example", // String | end search date
  'updatedSince': "updatedSince_example", // String | filters reports by updatedat
  'demandId': 789, // Number | filters on reports to include only those related to a specific demand
  'entryId': 789, // Number | filters on reports to include only those related to a specific care plan entry
  'episodeId': 789, // Number | filters on reports to include only those related to a specific episode
  'restrictiveMeasureId': 789, // Number | filters on reports to include only those related to a specific restrictictive measure
  'reportTypesWithComments': [3.4], // [Number] | filters on reports that have comments
  'onlyOwnReports': true, // Boolean | filters on reports written by the user
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.dossierReportAPIAuthorizedSearchByClientWithUpdatedSince(clientId, reportType, opts, (error, data, response) => {
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
 **clientId** | **Number**| which we want to search reports for | 
 **reportType** | [**[Number]**](Number.md)| list of types to filter on | 
 **keyword** | **String**| a text search term | [optional] 
 **filter** | [**DossierReportFilter**](.md)| the type of information to filter on | [optional] 
 **educationId** | **Number**| filters on reports of which the author has a specific employee | [optional] 
 **showHidden** | **Boolean**| shows hidden reports only has effect for the author or application managers | [optional] 
 **validFrom** | **String**| start search date | [optional] 
 **validTo** | **String**| end search date | [optional] 
 **updatedSince** | **String**| filters reports by updatedat | [optional] 
 **demandId** | **Number**| filters on reports to include only those related to a specific demand | [optional] 
 **entryId** | **Number**| filters on reports to include only those related to a specific care plan entry | [optional] 
 **episodeId** | **Number**| filters on reports to include only those related to a specific episode | [optional] 
 **restrictiveMeasureId** | **Number**| filters on reports to include only those related to a specific restrictictive measure | [optional] 
 **reportTypesWithComments** | [**[Number]**](Number.md)| filters on reports that have comments | [optional] 
 **onlyOwnReports** | **Boolean**| filters on reports written by the user | [optional] 
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIAuthorizedUnfilteredSearchByClient"></a>
# **dossierReportAPIAuthorizedUnfilteredSearchByClient**
> DossierListReportList dossierReportAPIAuthorizedUnfilteredSearchByClient(clientId, reportType, opts)

Return Reports Unfiltered, filtered by params Authorization is done in dossier controller this points to.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let clientId = 789; // Number | which we want to search reports for
let reportType = [3.4]; // [Number] | list of types to filter on
let opts = { 
  'keyword': "keyword_example", // String | a text search term
  'filter': new NedapOnsApi.DossierReportFilter(), // DossierReportFilter | the type of information to filter on
  'educationId': 789, // Number | filters on reports of which the author has a specific employee
  'showHidden': true, // Boolean | shows hidden reports only has effect for the author or application managers
  'validFrom': "validFrom_example", // String | start search date
  'validTo': "validTo_example", // String | end search date
  'demandId': 789, // Number | filters on reports to include only those related to a specific demand
  'entryId': 789, // Number | filters on reports to include only those related to a specific care plan entry
  'episodeId': 789, // Number | filters on reports to include only those related to a specific episode
  'restrictiveMeasureId': 789, // Number | filters on reports to include only those related to a specific restrictictive measure
  'reportTypesWithComments': [3.4], // [Number] | filters on reports that have comments
  'onlyOwnReports': true, // Boolean | filters on reports written by the user
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.dossierReportAPIAuthorizedUnfilteredSearchByClient(clientId, reportType, opts, (error, data, response) => {
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
 **clientId** | **Number**| which we want to search reports for | 
 **reportType** | [**[Number]**](Number.md)| list of types to filter on | 
 **keyword** | **String**| a text search term | [optional] 
 **filter** | [**DossierReportFilter**](.md)| the type of information to filter on | [optional] 
 **educationId** | **Number**| filters on reports of which the author has a specific employee | [optional] 
 **showHidden** | **Boolean**| shows hidden reports only has effect for the author or application managers | [optional] 
 **validFrom** | **String**| start search date | [optional] 
 **validTo** | **String**| end search date | [optional] 
 **demandId** | **Number**| filters on reports to include only those related to a specific demand | [optional] 
 **entryId** | **Number**| filters on reports to include only those related to a specific care plan entry | [optional] 
 **episodeId** | **Number**| filters on reports to include only those related to a specific episode | [optional] 
 **restrictiveMeasureId** | **Number**| filters on reports to include only those related to a specific restrictictive measure | [optional] 
 **reportTypesWithComments** | [**[Number]**](Number.md)| filters on reports that have comments | [optional] 
 **onlyOwnReports** | **Boolean**| filters on reports written by the user | [optional] 
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIAuthorizedUpdate"></a>
# **dossierReportAPIAuthorizedUpdate**
> DossierReport dossierReportAPIAuthorizedUpdate(body, clientId, reportId)

Update Report. Authorization is done in dossier controller this points to.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let body = new NedapOnsApi.DossierReport(); // DossierReport | 
let clientId = 789; // Number | id
let reportId = 789; // Number | id

apiInstance.dossierReportAPIAuthorizedUpdate(body, clientId, reportId, (error, data, response) => {
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
 **body** | [**DossierReport**](DossierReport.md)|  | 
 **clientId** | **Number**| id | 
 **reportId** | **Number**| id | 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierReportAPIById"></a>
# **dossierReportAPIById**
> DossierReport dossierReportAPIById(id, opts)

Return the Report corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let id = 789; // Number | used for selecting Report
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Report | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIByUuid"></a>
# **dossierReportAPIByUuid**
> DossierReport dossierReportAPIByUuid(uuid, opts)

Return the Report corresponding to the given uuid

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let uuid = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportAPIByUuid(uuid, opts, (error, data, response) => {
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
 **uuid** | [**String**](.md)|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIChildrenByReportId"></a>
# **dossierReportAPIChildrenByReportId**
> DossierListReportList dossierReportAPIChildrenByReportId(reportId)

Returns all the reactions for a given report

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let reportId = 789; // Number | 

apiInstance.dossierReportAPIChildrenByReportId(reportId, (error, data, response) => {
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
 **reportId** | **Number**|  | 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPICreate"></a>
# **dossierReportAPICreate**
> DossierReport dossierReportAPICreate(body, opts)

Create Report

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let body = new NedapOnsApi.DossierReport(); // DossierReport | Report to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportAPICreate(body, opts, (error, data, response) => {
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
 **body** | [**DossierReport**](DossierReport.md)| Report to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierReportAPICreateSoapReport"></a>
# **dossierReportAPICreateSoapReport**
> DossierReport dossierReportAPICreateSoapReport(body, opts)

Create a SOAP report where each soap-part (optionally) has it&#x27;s own authorization To make use of the per-soap-part authorization model make sure to fill each of the S-O-A-P parts of a SOAP report and put them in the SoapReportEntries nested in the Report.

To make use of the per-soap-part authorization model make sure to fill each of the S-O-A-P parts of a SOAP report and put them in the SoapReportEntries nested in the Report.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let body = new NedapOnsApi.DossierReport(); // DossierReport | the report to create
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportAPICreateSoapReport(body, opts, (error, data, response) => {
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
 **body** | [**DossierReport**](DossierReport.md)| the report to create | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierReportAPIDelete"></a>
# **dossierReportAPIDelete**
> DossierReport dossierReportAPIDelete(id, opts)

Deletes the Report with given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let id = 789; // Number | used for selecting Report
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportAPIDelete(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting Report | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIFindByCarePlanEntry"></a>
# **dossierReportAPIFindByCarePlanEntry**
> DossierListReportList dossierReportAPIFindByCarePlanEntry(carePlanEntryId, opts)

Returns all reports filtered by care plan entry with HTML escaping applied to text fields.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let carePlanEntryId = 789; // Number | 
let opts = { 
  'reportType': [3.4], // [Number] | 
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.dossierReportAPIFindByCarePlanEntry(carePlanEntryId, opts, (error, data, response) => {
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
 **carePlanEntryId** | **Number**|  | 
 **reportType** | [**[Number]**](Number.md)|  | [optional] 
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIFindByCarePlanEntryUnescaped"></a>
# **dossierReportAPIFindByCarePlanEntryUnescaped**
> DossierListReportList dossierReportAPIFindByCarePlanEntryUnescaped(carePlanEntryId, opts)

Returns all reports filtered by care plan entry without applying HTML esaping.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let carePlanEntryId = 789; // Number | 
let opts = { 
  'reportType': [3.4], // [Number] | 
  'offset': 56, // Number | number of results to skip
  'limit': 56 // Number | number of results for one call
};
apiInstance.dossierReportAPIFindByCarePlanEntryUnescaped(carePlanEntryId, opts, (error, data, response) => {
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
 **carePlanEntryId** | **Number**|  | 
 **reportType** | [**[Number]**](Number.md)|  | [optional] 
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIFindByDate"></a>
# **dossierReportAPIFindByDate**
> DossierListReportList dossierReportAPIFindByDate(clientId, validFrom, validTo, opts)

Returns all reports filtered by date.

valid_from and valid_to are required query parameters

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let clientId = 789; // Number | 
let validFrom = new Date("2013-10-20"); // Date | starting time
let validTo = new Date("2013-10-20"); // Date | end time
let opts = { 
  'reportType': 789 // Number | 
};
apiInstance.dossierReportAPIFindByDate(clientId, validFrom, validTo, opts, (error, data, response) => {
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
 **validFrom** | **Date**| starting time | 
 **validTo** | **Date**| end time | 
 **reportType** | **Number**|  | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIFindByDemand"></a>
# **dossierReportAPIFindByDemand**
> DossierListReportList dossierReportAPIFindByDemand(demandId, opts)

Returns all reports filtered by demand id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let demandId = 789; // Number | 
let opts = { 
  'reportType': 789, // Number | 
  'clientId': 789 // Number | 
};
apiInstance.dossierReportAPIFindByDemand(demandId, opts, (error, data, response) => {
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
 **demandId** | **Number**|  | 
 **reportType** | **Number**|  | [optional] 
 **clientId** | **Number**|  | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIFindByEpisode"></a>
# **dossierReportAPIFindByEpisode**
> DossierListReportList dossierReportAPIFindByEpisode(episodeId, opts)

Returns all reports filtered by episode id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let episodeId = 789; // Number | 
let opts = { 
  'reportType': 789 // Number | 
};
apiInstance.dossierReportAPIFindByEpisode(episodeId, opts, (error, data, response) => {
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
 **episodeId** | **Number**|  | 
 **reportType** | **Number**|  | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIFindByNextDossierReportLink"></a>
# **dossierReportAPIFindByNextDossierReportLink**
> DossierReport dossierReportAPIFindByNextDossierReportLink(reportLinkId)

Returns report by next dossier report link

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let reportLinkId = 789; // Number | 

apiInstance.dossierReportAPIFindByNextDossierReportLink(reportLinkId, (error, data, response) => {
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
 **reportLinkId** | **Number**|  | 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIFindByReportLink"></a>
# **dossierReportAPIFindByReportLink**
> DossierReport dossierReportAPIFindByReportLink(reportLinkId, reportLinkType)

Returns all reports filtered by report link id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let reportLinkId = 789; // Number | 
let reportLinkType = new NedapOnsApi.DossierReportLinkType(); // DossierReportLinkType | 

apiInstance.dossierReportAPIFindByReportLink(reportLinkId, reportLinkType, (error, data, response) => {
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
 **reportLinkId** | **Number**|  | 
 **reportLinkType** | [**DossierReportLinkType**](.md)|  | 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIFindByRestrictiveMeasure"></a>
# **dossierReportAPIFindByRestrictiveMeasure**
> DossierListReportList dossierReportAPIFindByRestrictiveMeasure(restrictiveMeasureId, opts)

Returns all reports filtered by restrictive measures id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let restrictiveMeasureId = 789; // Number | 
let opts = { 
  'reportType': 789 // Number | 
};
apiInstance.dossierReportAPIFindByRestrictiveMeasure(restrictiveMeasureId, opts, (error, data, response) => {
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
 **restrictiveMeasureId** | **Number**|  | 
 **reportType** | **Number**|  | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPILastReportAuthorizationsByClientIdAndEmployeeId"></a>
# **dossierReportAPILastReportAuthorizationsByClientIdAndEmployeeId**
> DossierListReportAuthorizationList dossierReportAPILastReportAuthorizationsByClientIdAndEmployeeId(clientId, employeeId, opts)

Return the child Reports of a Report corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let clientId = 789; // Number | 
let employeeId = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportAPILastReportAuthorizationsByClientIdAndEmployeeId(clientId, employeeId, opts, (error, data, response) => {
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
 **employeeId** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierListReportAuthorizationList**](DossierListReportAuthorizationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPISearchByClient"></a>
# **dossierReportAPISearchByClient**
> DossierListReportList dossierReportAPISearchByClient(clientId, opts)

Searches for Reports for the Client (corresponding to the given id)

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let clientId = 789; // Number | which we want to search reports for
let opts = { 
  'keyword': "keyword_example", // String | a text search term
  'filter': new NedapOnsApi.DossierReportFilter(), // DossierReportFilter | the type of information to filter on
  'educationId': 789, // Number | filters on reports of which the author has a specific employee
  'showHidden': true, // Boolean | shows hidden reports only has effect for the author or application managers
  'reportType': [3.4], // [Number] | list of types to filter on
  'validFrom': new Date("2013-10-20"), // Date | start search date
  'validTo': new Date("2013-10-20"), // Date | end search date
  'demandId': 789, // Number | filters on reports to include only those related to a specific demand
  'entryId': 789, // Number | filters on reports to include only those related to a specific care plan entry
  'episodeId': 789, // Number | filters on reports to include only those related to a specific episode
  'restrictiveMeasureId': 789, // Number | filters on reports to include only those related to a specific restrictictive measure
  'reportTypesWithComments': [3.4], // [Number] | filters on reports that have comments
  'onlyOwnReports': true, // Boolean | filters on reports written by the user
  'offset': 56, // Number | number of results to skip
  'limit': 56, // Number | number of results for one call
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example", // String | 
  'ifModifiedSince': "ifModifiedSince_example" // String | 
};
apiInstance.dossierReportAPISearchByClient(clientId, opts, (error, data, response) => {
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
 **clientId** | **Number**| which we want to search reports for | 
 **keyword** | **String**| a text search term | [optional] 
 **filter** | [**DossierReportFilter**](.md)| the type of information to filter on | [optional] 
 **educationId** | **Number**| filters on reports of which the author has a specific employee | [optional] 
 **showHidden** | **Boolean**| shows hidden reports only has effect for the author or application managers | [optional] 
 **reportType** | [**[Number]**](Number.md)| list of types to filter on | [optional] 
 **validFrom** | **Date**| start search date | [optional] 
 **validTo** | **Date**| end search date | [optional] 
 **demandId** | **Number**| filters on reports to include only those related to a specific demand | [optional] 
 **entryId** | **Number**| filters on reports to include only those related to a specific care plan entry | [optional] 
 **episodeId** | **Number**| filters on reports to include only those related to a specific episode | [optional] 
 **restrictiveMeasureId** | **Number**| filters on reports to include only those related to a specific restrictictive measure | [optional] 
 **reportTypesWithComments** | [**[Number]**](Number.md)| filters on reports that have comments | [optional] 
 **onlyOwnReports** | **Boolean**| filters on reports written by the user | [optional] 
 **offset** | **Number**| number of results to skip | [optional] 
 **limit** | **Number**| number of results for one call | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 
 **ifModifiedSince** | **String**|  | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIStreamAll"></a>
# **dossierReportAPIStreamAll**
> DossierListReportList dossierReportAPIStreamAll()

Return all Report models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
apiInstance.dossierReportAPIStreamAll((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="dossierReportAPIStreamUpdates"></a>
# **dossierReportAPIStreamUpdates**
> DossierListReportList dossierReportAPIStreamUpdates(since)

Return all Report models which were updated since the date given in the request

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.dossierReportAPIStreamUpdates(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="dossierReportAPIUpdate"></a>
# **dossierReportAPIUpdate**
> DossierReport dossierReportAPIUpdate(body, id, opts)

Updates the given Report

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let body = new NedapOnsApi.DossierReport(); // DossierReport | Report to update
let id = 789; // Number | used for selecting Report
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportAPIUpdate(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierReport**](DossierReport.md)| Report to update | 
 **id** | **Number**| used for selecting Report | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierReportAPIUpdateSoapReport"></a>
# **dossierReportAPIUpdateSoapReport**
> DossierReport dossierReportAPIUpdateSoapReport(body, id, opts)

Updates a SOAP report where each soap-part (optionally) has it&#x27;s own authorization To make use of the per-soap-part authorization model make sure to fill each of the S-O-A-P parts of a SOAP report and put them in the SoapReportEntries nested in the Report.

To make use of the per-soap-part authorization model make sure to fill each of the S-O-A-P parts of a SOAP report and put them in the SoapReportEntries nested in the Report.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let body = new NedapOnsApi.DossierReport(); // DossierReport | the report to create
let id = 789; // Number | 
let opts = { 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dossierReportAPIUpdateSoapReport(body, id, opts, (error, data, response) => {
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
 **body** | [**DossierReport**](DossierReport.md)| the report to create | 
 **id** | **Number**|  | 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DossierReport**](DossierReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dossierReportAPIWithActions"></a>
# **dossierReportAPIWithActions**
> DossierListReportList dossierReportAPIWithActions(myActions, opts)

Return reports that have actions created by user or for user&#x27;s expertise

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let myActions = true; // Boolean | true for my created reports, false for actions for my expertise
let opts = { 
  'locationId': 789, // Number | optional filter by location
  'locationIds': [3.4], // [Number] | optional filter by multiple locations
  'withSubLocations': true // Boolean | If true, includes the sub locations of the given locations. If false, does not include the sub locations. If nil: includes sublocations if location_id is given, excludes sublocations if location_ids are given (for backwards compatibility purposes)
};
apiInstance.dossierReportAPIWithActions(myActions, opts, (error, data, response) => {
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
 **myActions** | **Boolean**| true for my created reports, false for actions for my expertise | 
 **locationId** | **Number**| optional filter by location | [optional] 
 **locationIds** | [**[Number]**](Number.md)| optional filter by multiple locations | [optional] 
 **withSubLocations** | **Boolean**| If true, includes the sub locations of the given locations. If false, does not include the sub locations. If nil: includes sublocations if location_id is given, excludes sublocations if location_ids are given (for backwards compatibility purposes) | [optional] 

### Return type

[**DossierListReportList**](DossierListReportList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dossierReportAPIWithActionsSummary"></a>
# **dossierReportAPIWithActionsSummary**
> DossierReportsWithActionsSummary dossierReportAPIWithActionsSummary(opts)

Return a count of reports that have actions created by user or for user&#x27;s expertise

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DossierReportApi();
let opts = { 
  'locationId': 789, // Number | optional filter by location
  'locationIds': [3.4], // [Number] | optional filter by multiple locations
  'withSubLocations': true // Boolean | If true, includes the sub locations of the given locations. If false, does not include the sub locations. If nil: includes sublocations if location_id is given, excludes sublocations if location_ids are given (for backwards compatibility purposes)
};
apiInstance.dossierReportAPIWithActionsSummary(opts, (error, data, response) => {
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
 **locationId** | **Number**| optional filter by location | [optional] 
 **locationIds** | [**[Number]**](Number.md)| optional filter by multiple locations | [optional] 
 **withSubLocations** | **Boolean**| If true, includes the sub locations of the given locations. If false, does not include the sub locations. If nil: includes sublocations if location_id is given, excludes sublocations if location_ids are given (for backwards compatibility purposes) | [optional] 

### Return type

[**DossierReportsWithActionsSummary**](DossierReportsWithActionsSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

