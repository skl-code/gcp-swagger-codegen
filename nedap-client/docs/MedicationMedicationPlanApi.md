# NedapOnsApi.MedicationMedicationPlanApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**medicationMedicationPlanAPICurrentWeekOverview**](MedicationMedicationPlanApi.md#medicationMedicationPlanAPICurrentWeekOverview) | **GET** /v0/medicatie_legacy/medication_plan_overviews/current_week | Returns information about current medication plans
[**medicationMedicationPlanAPIGetMedicationPlan**](MedicationMedicationPlanApi.md#medicationMedicationPlanAPIGetMedicationPlan) | **GET** /v0/medicatie_legacy/medication_plans/clients/{client_id}/weeks/{week} | Fetch a medication plan
[**medicationMedicationPlanAPINextWeekOverview**](MedicationMedicationPlanApi.md#medicationMedicationPlanAPINextWeekOverview) | **GET** /v0/medicatie_legacy/medication_plan_overviews/next_week | Returns information about upcoming medication plans

<a name="medicationMedicationPlanAPICurrentWeekOverview"></a>
# **medicationMedicationPlanAPICurrentWeekOverview**
> MedicationListMedicationPlanList medicationMedicationPlanAPICurrentWeekOverview(opts)

Returns information about current medication plans

Returns all available &#x60;MedicationPlan&#x60;s for the current week. As this is potentially a large list, cursor-based pagination is used. When the &#x60;Link&#x60; header is part of the response, continue fetching the next set of results using the provided URI in the header, until the response does not include the &#x60;Link&#x60; header anymore.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MedicationMedicationPlanApi();
let opts = { 
  'after': 789 // Number | When no value is supplied, pagination starts from the beginning. Specifies the `client_id` from the last medication plan in the previous response for pagination.
};
apiInstance.medicationMedicationPlanAPICurrentWeekOverview(opts, (error, data, response) => {
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
 **after** | **Number**| When no value is supplied, pagination starts from the beginning. Specifies the &#x60;client_id&#x60; from the last medication plan in the previous response for pagination. | [optional] 

### Return type

[**MedicationListMedicationPlanList**](MedicationListMedicationPlanList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="medicationMedicationPlanAPIGetMedicationPlan"></a>
# **medicationMedicationPlanAPIGetMedicationPlan**
> &#x27;Blob&#x27; medicationMedicationPlanAPIGetMedicationPlan(clientId, week, opts)

Fetch a medication plan

Returns a PDF version of a medication plan for a specific client and week. The &#x60;ETag&#x60; header is included in each response to save bandwidth. The next request using the same URI should include the value of the &#x60;ETag&#x60; header in the request header &#x60;If-None-Match&#x60;. The &#x60;ETag&#x60; (sent with &#x60;If-None-Match&#x60;) will be compared to the &#x60;ETag&#x60; of the current version of the medication plan and if both values match, a 304 &#x60;Not Modified&#x60; status, without a body, will be returned, meaning the cached version of the response is still good to use (fresh).

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MedicationMedicationPlanApi();
let clientId = 789; // Number | IoServer objectId of the client
let week = "week_example"; // String | The week for which the medication plan will be served
let opts = { 
  'ifNoneMatch': "ifNoneMatch_example" // String | The unique identifier for the current version of the resource
};
apiInstance.medicationMedicationPlanAPIGetMedicationPlan(clientId, week, opts, (error, data, response) => {
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
 **clientId** | **Number**| IoServer objectId of the client | 
 **week** | **String**| The week for which the medication plan will be served | 
 **ifNoneMatch** | **String**| The unique identifier for the current version of the resource | [optional] 

### Return type

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream, application/json

<a name="medicationMedicationPlanAPINextWeekOverview"></a>
# **medicationMedicationPlanAPINextWeekOverview**
> MedicationListMedicationPlanList medicationMedicationPlanAPINextWeekOverview(opts)

Returns information about upcoming medication plans

Returns all available &#x60;MedicationPlan&#x60;s for the next week. As this is potentially a large list, cursor-based pagination is used. When the &#x60;Link&#x60; header is part of the response, continue fetching the next set of results using the provided URI in the header, until the response does not include the &#x60;Link&#x60; header anymore.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MedicationMedicationPlanApi();
let opts = { 
  'after': 789 // Number | When no value is supplied, pagination starts from the beginning. Specifies the `client_id` from the last medication plan in the previous response for pagination.
};
apiInstance.medicationMedicationPlanAPINextWeekOverview(opts, (error, data, response) => {
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
 **after** | **Number**| When no value is supplied, pagination starts from the beginning. Specifies the &#x60;client_id&#x60; from the last medication plan in the previous response for pagination. | [optional] 

### Return type

[**MedicationListMedicationPlanList**](MedicationListMedicationPlanList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

