# NedapOnsApi.MovesAvailabilityTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesAvailabilityTypeAPIStreamAll**](MovesAvailabilityTypeApi.md#movesAvailabilityTypeAPIStreamAll) | **GET** /v0/xstream/availability_types/data | Return all AvailabilityType models in a streaming manner

<a name="movesAvailabilityTypeAPIStreamAll"></a>
# **movesAvailabilityTypeAPIStreamAll**
> MovesListAvailabilityTypeList movesAvailabilityTypeAPIStreamAll()

Return all AvailabilityType models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesAvailabilityTypeApi();
apiInstance.movesAvailabilityTypeAPIStreamAll((error, data, response) => {
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

[**MovesListAvailabilityTypeList**](MovesListAvailabilityTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

