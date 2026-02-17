# NedapOnsApi.JwJwZorglegitimatieApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jwJwZorglegitimatieAPIById**](JwJwZorglegitimatieApi.md#jwJwZorglegitimatieAPIById) | **GET** /v0/administration/jw/zorglegitimaties/{id} | Return the JwZorglegitimatie corresponding to the given id
[**jwJwZorglegitimatieAPICreate**](JwJwZorglegitimatieApi.md#jwJwZorglegitimatieAPICreate) | **POST** /v0/administration/jw/zorglegitimaties | Create JwZorglegitimatie
[**jwJwZorglegitimatieAPIDelete**](JwJwZorglegitimatieApi.md#jwJwZorglegitimatieAPIDelete) | **DELETE** /v0/administration/jw/zorglegitimaties/{id} | Delete a JwZorglegitimatie

<a name="jwJwZorglegitimatieAPIById"></a>
# **jwJwZorglegitimatieAPIById**
> JwJwZorglegitimatie jwJwZorglegitimatieAPIById(id)

Return the JwZorglegitimatie corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.JwJwZorglegitimatieApi();
let id = 789; // Number | used to find the JwZorglegitimatie

apiInstance.jwJwZorglegitimatieAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used to find the JwZorglegitimatie | 

### Return type

[**JwJwZorglegitimatie**](JwJwZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="jwJwZorglegitimatieAPICreate"></a>
# **jwJwZorglegitimatieAPICreate**
> JwJwZorglegitimatie jwJwZorglegitimatieAPICreate(body)

Create JwZorglegitimatie

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.JwJwZorglegitimatieApi();
let body = new NedapOnsApi.JwJwZorglegitimatie(); // JwJwZorglegitimatie | JwZorglegitimatie to create

apiInstance.jwJwZorglegitimatieAPICreate(body, (error, data, response) => {
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
 **body** | [**JwJwZorglegitimatie**](JwJwZorglegitimatie.md)| JwZorglegitimatie to create | 

### Return type

[**JwJwZorglegitimatie**](JwJwZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jwJwZorglegitimatieAPIDelete"></a>
# **jwJwZorglegitimatieAPIDelete**
> JwJwZorglegitimatie jwJwZorglegitimatieAPIDelete(id)

Delete a JwZorglegitimatie

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.JwJwZorglegitimatieApi();
let id = 789; // Number | used to find the JwZorglegitimatie

apiInstance.jwJwZorglegitimatieAPIDelete(id, (error, data, response) => {
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
 **id** | **Number**| used to find the JwZorglegitimatie | 

### Return type

[**JwJwZorglegitimatie**](JwJwZorglegitimatie.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

