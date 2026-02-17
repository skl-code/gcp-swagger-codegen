# NedapOnsApi.MovesPlanCardOccurrenceApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesPlanCardOccurrenceAPIIncidentalChange**](MovesPlanCardOccurrenceApi.md#movesPlanCardOccurrenceAPIIncidentalChange) | **PATCH** /v0/plannen_roosteren/plan_cards/{checksum} | Update a plan card occurrence
[**movesPlanCardOccurrenceAPIPlan**](MovesPlanCardOccurrenceApi.md#movesPlanCardOccurrenceAPIPlan) | **POST** /v0/plannen_roosteren/plan_cards/{checksum}/plan | Plan a single plan card into a container
[**movesPlanCardOccurrenceAPISearch**](MovesPlanCardOccurrenceApi.md#movesPlanCardOccurrenceAPISearch) | **POST** /v0/plannen_roosteren/plan_cards/search | Return the active plan cards searched for within a specified period.

<a name="movesPlanCardOccurrenceAPIIncidentalChange"></a>
# **movesPlanCardOccurrenceAPIIncidentalChange**
> MovesPlanCardOccurrenceResponse movesPlanCardOccurrenceAPIIncidentalChange(body, checksum)

Update a plan card occurrence

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesPlanCardOccurrenceApi();
let body = new NedapOnsApi.MovesPlanCardOccurrenceAttributesRequest(); // MovesPlanCardOccurrenceAttributesRequest | 
let checksum = "checksum_example"; // String | The checksum of the PlanCardOccurrence being updated

apiInstance.movesPlanCardOccurrenceAPIIncidentalChange(body, checksum, (error, data, response) => {
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
 **body** | [**MovesPlanCardOccurrenceAttributesRequest**](MovesPlanCardOccurrenceAttributesRequest.md)|  | 
 **checksum** | **String**| The checksum of the PlanCardOccurrence being updated | 

### Return type

[**MovesPlanCardOccurrenceResponse**](MovesPlanCardOccurrenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="movesPlanCardOccurrenceAPIPlan"></a>
# **movesPlanCardOccurrenceAPIPlan**
> MovesPlanCardOccurrenceResponse movesPlanCardOccurrenceAPIPlan(body, checksum)

Plan a single plan card into a container

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesPlanCardOccurrenceApi();
let body = new NedapOnsApi.MovesPlanCardOccurrencePlanRequest(); // MovesPlanCardOccurrencePlanRequest | 
let checksum = "checksum_example"; // String | The checksum of the PlanCardOccurrence being planned

apiInstance.movesPlanCardOccurrenceAPIPlan(body, checksum, (error, data, response) => {
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
 **body** | [**MovesPlanCardOccurrencePlanRequest**](MovesPlanCardOccurrencePlanRequest.md)|  | 
 **checksum** | **String**| The checksum of the PlanCardOccurrence being planned | 

### Return type

[**MovesPlanCardOccurrenceResponse**](MovesPlanCardOccurrenceResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="movesPlanCardOccurrenceAPISearch"></a>
# **movesPlanCardOccurrenceAPISearch**
> MovesPlanCardOccurrenceList movesPlanCardOccurrenceAPISearch(body)

Return the active plan cards searched for within a specified period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesPlanCardOccurrenceApi();
let body = new NedapOnsApi.MovesContainerSearchRequest(); // MovesContainerSearchRequest | 

apiInstance.movesPlanCardOccurrenceAPISearch(body, (error, data, response) => {
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
 **body** | [**MovesContainerSearchRequest**](MovesContainerSearchRequest.md)|  | 

### Return type

[**MovesPlanCardOccurrenceList**](MovesPlanCardOccurrenceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

