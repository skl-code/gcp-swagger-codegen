# NedapOnsApi.WmoWmoZorglegitimatieApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**wmoWmoZorglegitimatieAPIById**](WmoWmoZorglegitimatieApi.md#wmoWmoZorglegitimatieAPIById) | **GET** /v0/administration/wmo/zorglegitimaties/{id} | Return the WmoZorgLegitimatie corresponding to the given id
[**wmoWmoZorglegitimatieAPICreate**](WmoWmoZorglegitimatieApi.md#wmoWmoZorglegitimatieAPICreate) | **POST** /v0/administration/wmo/zorglegitimaties | Create WmoZorglegitimatie
[**wmoWmoZorglegitimatieAPIDelete**](WmoWmoZorglegitimatieApi.md#wmoWmoZorglegitimatieAPIDelete) | **DELETE** /v0/administration/wmo/zorglegitimaties/{id} | Delete a WmoZorglegitimatie

<a name="wmoWmoZorglegitimatieAPIById"></a>
# **wmoWmoZorglegitimatieAPIById**
> WmoWmoZorglegitimatie wmoWmoZorglegitimatieAPIById(id)

Return the WmoZorgLegitimatie corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WmoWmoZorglegitimatieApi();
let id = 789; // Number | used to find the WmoZorglegitimatie

apiInstance.wmoWmoZorglegitimatieAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used to find the WmoZorglegitimatie | 

### Return type

[**WmoWmoZorglegitimatie**](WmoWmoZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="wmoWmoZorglegitimatieAPICreate"></a>
# **wmoWmoZorglegitimatieAPICreate**
> WmoWmoZorglegitimatie wmoWmoZorglegitimatieAPICreate(body)

Create WmoZorglegitimatie

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WmoWmoZorglegitimatieApi();
let body = new NedapOnsApi.WmoWmoZorglegitimatie(); // WmoWmoZorglegitimatie | WmoZorglegitimatie to create

apiInstance.wmoWmoZorglegitimatieAPICreate(body, (error, data, response) => {
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
 **body** | [**WmoWmoZorglegitimatie**](WmoWmoZorglegitimatie.md)| WmoZorglegitimatie to create | 

### Return type

[**WmoWmoZorglegitimatie**](WmoWmoZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="wmoWmoZorglegitimatieAPIDelete"></a>
# **wmoWmoZorglegitimatieAPIDelete**
> WmoWmoZorglegitimatie wmoWmoZorglegitimatieAPIDelete(id)

Delete a WmoZorglegitimatie

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.WmoWmoZorglegitimatieApi();
let id = 789; // Number | used to find the WmoZorglegitimatie

apiInstance.wmoWmoZorglegitimatieAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| used to find the WmoZorglegitimatie | 

### Return type

[**WmoWmoZorglegitimatie**](WmoWmoZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

