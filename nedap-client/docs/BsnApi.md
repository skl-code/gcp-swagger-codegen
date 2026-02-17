# NedapOnsApi.BsnApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bsnAPIByClientId**](BsnApi.md#bsnAPIByClientId) | **GET** /v0/administration/clients/{client_id}/bsn | Return the bsn of a client corresponding to the given client id.
[**bsnAPIById**](BsnApi.md#bsnAPIById) | **GET** /v0/administration/bsns/{id} | Return the Bsn corresponding to the given id
[**bsnAPICreate**](BsnApi.md#bsnAPICreate) | **POST** /v0/administration/bsns | Create Bsn
[**bsnAPIUpdateBsn**](BsnApi.md#bsnAPIUpdateBsn) | **PUT** /v0/administration/clients/{client_id}/bsn | Updates the BSN of a client

<a name="bsnAPIByClientId"></a>
# **bsnAPIByClientId**
> Bsn bsnAPIByClientId(clientId)

Return the bsn of a client corresponding to the given client id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.BsnApi();
let clientId = 789; // Number | id

apiInstance.bsnAPIByClientId(clientId, (error, data, response) => {
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
 **clientId** | **Number**| id | 

### Return type

[**Bsn**](Bsn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="bsnAPIById"></a>
# **bsnAPIById**
> Bsn bsnAPIById(id)

Return the Bsn corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.BsnApi();
let id = 789; // Number | used for selecting Bsn

apiInstance.bsnAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Bsn | 

### Return type

[**Bsn**](Bsn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="bsnAPICreate"></a>
# **bsnAPICreate**
> Bsn bsnAPICreate(body)

Create Bsn

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.BsnApi();
let body = new NedapOnsApi.Bsn(); // Bsn | Bsn to create

apiInstance.bsnAPICreate(body, (error, data, response) => {
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
 **body** | [**Bsn**](Bsn.md)| Bsn to create | 

### Return type

[**Bsn**](Bsn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="bsnAPIUpdateBsn"></a>
# **bsnAPIUpdateBsn**
> Bsn bsnAPIUpdateBsn(body, clientId)

Updates the BSN of a client

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.BsnApi();
let body = new NedapOnsApi.Bsn(); // Bsn | 
let clientId = 789; // Number | id

apiInstance.bsnAPIUpdateBsn(body, clientId, (error, data, response) => {
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
 **body** | [**Bsn**](Bsn.md)|  | 
 **clientId** | **Number**| id | 

### Return type

[**Bsn**](Bsn.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

