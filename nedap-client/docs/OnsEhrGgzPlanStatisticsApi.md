# NedapOnsApi.OnsEhrGgzPlanStatisticsApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsEhrGgzPlanStatisticsAPIAll**](OnsEhrGgzPlanStatisticsApi.md#onsEhrGgzPlanStatisticsAPIAll) | **GET** /v0/openehr_dossier/back_channel/unauthorized/plan_statistics/ggz | Retrieves plan statistics for the mental healthcare plan

<a name="onsEhrGgzPlanStatisticsAPIAll"></a>
# **onsEhrGgzPlanStatisticsAPIAll**
> OnsEhrGgzPlanStatistics onsEhrGgzPlanStatisticsAPIAll()

Retrieves plan statistics for the mental healthcare plan

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.OnsEhrGgzPlanStatisticsApi();
apiInstance.onsEhrGgzPlanStatisticsAPIAll((error, data, response) => {
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

[**OnsEhrGgzPlanStatistics**](OnsEhrGgzPlanStatistics.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

