# NedapOnsApi.MovesContainerApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**movesContainerAPISearch**](MovesContainerApi.md#movesContainerAPISearch) | **POST** /v0/plannen_roosteren/containers/search | Return the active containers searched for within a specified period.

<a name="movesContainerAPISearch"></a>
# **movesContainerAPISearch**
> MovesListContainerList movesContainerAPISearch(body)

Return the active containers searched for within a specified period.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.MovesContainerApi();
let body = new NedapOnsApi.MovesContainerSearchRequest(); // MovesContainerSearchRequest | 

apiInstance.movesContainerAPISearch(body, (error, data, response) => {
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

[**MovesListContainerList**](MovesListContainerList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

