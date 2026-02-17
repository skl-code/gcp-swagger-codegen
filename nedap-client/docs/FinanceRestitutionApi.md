# NedapOnsApi.FinanceRestitutionApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeRestitutionAPIStreamAll**](FinanceRestitutionApi.md#financeRestitutionAPIStreamAll) | **GET** /v0/xstream/restitutions/data | Return all Restitution models in a streaming manner
[**financeRestitutionAPIStreamUpdates**](FinanceRestitutionApi.md#financeRestitutionAPIStreamUpdates) | **GET** /v0/xstream/restitutions/updates | Return all Restitution models which where updated since the date given in the request.

<a name="financeRestitutionAPIStreamAll"></a>
# **financeRestitutionAPIStreamAll**
> FinanceListRestitutionList financeRestitutionAPIStreamAll()

Return all Restitution models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceRestitutionApi();
apiInstance.financeRestitutionAPIStreamAll((error, data, response) => {
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

[**FinanceListRestitutionList**](FinanceListRestitutionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeRestitutionAPIStreamUpdates"></a>
# **financeRestitutionAPIStreamUpdates**
> FinanceListRestitutionList financeRestitutionAPIStreamUpdates(since)

Return all Restitution models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceRestitutionApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeRestitutionAPIStreamUpdates(since, (error, data, response) => {
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

[**FinanceListRestitutionList**](FinanceListRestitutionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

