# NedapOnsApi.TeamAddressApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**teamAddressAPIById**](TeamAddressApi.md#teamAddressAPIById) | **GET** /v0/administration/team_addresses/{id} | Return the Team Address corresponding to the given id
[**teamAddressAPICreate**](TeamAddressApi.md#teamAddressAPICreate) | **POST** /v0/administration/team_addresses | Create TeamAddress
[**teamAddressAPIDelete**](TeamAddressApi.md#teamAddressAPIDelete) | **DELETE** /v0/administration/team_addresses/{id} | Used to delete TeamAddress by a given id
[**teamAddressAPIUpdateById**](TeamAddressApi.md#teamAddressAPIUpdateById) | **PUT** /v0/administration/team_addresses/{id} | Updates the given TeamAddress

<a name="teamAddressAPIById"></a>
# **teamAddressAPIById**
> TeamAddress teamAddressAPIById(id)

Return the Team Address corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAddressApi();
let id = 789; // Number | Selecting TeamAddress

apiInstance.teamAddressAPIById(id, (error, data, response) => {
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
 **id** | **Number**| Selecting TeamAddress | 

### Return type

[**TeamAddress**](TeamAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="teamAddressAPICreate"></a>
# **teamAddressAPICreate**
> TeamAddress teamAddressAPICreate(body)

Create TeamAddress

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAddressApi();
let body = new NedapOnsApi.TeamAddress(); // TeamAddress | TeamAddress to create

apiInstance.teamAddressAPICreate(body, (error, data, response) => {
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
 **body** | [**TeamAddress**](TeamAddress.md)| TeamAddress to create | 

### Return type

[**TeamAddress**](TeamAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="teamAddressAPIDelete"></a>
# **teamAddressAPIDelete**
> teamAddressAPIDelete(id)

Used to delete TeamAddress by a given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAddressApi();
let id = 789; // Number | Selecting TeamAddress to delete

apiInstance.teamAddressAPIDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Selecting TeamAddress to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="teamAddressAPIUpdateById"></a>
# **teamAddressAPIUpdateById**
> TeamAddress teamAddressAPIUpdateById(body, id)

Updates the given TeamAddress

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.TeamAddressApi();
let body = new NedapOnsApi.TeamAddress(); // TeamAddress | TeamAddress to update
let id = 789; // Number | Selecting TeamAddress to update

apiInstance.teamAddressAPIUpdateById(body, id, (error, data, response) => {
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
 **body** | [**TeamAddress**](TeamAddress.md)| TeamAddress to update | 
 **id** | **Number**| Selecting TeamAddress to update | 

### Return type

[**TeamAddress**](TeamAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

