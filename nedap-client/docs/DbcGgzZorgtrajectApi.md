# NedapOnsApi.DbcGgzZorgtrajectApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbcGgzZorgtrajectAPIByClient**](DbcGgzZorgtrajectApi.md#dbcGgzZorgtrajectAPIByClient) | **GET** /v0/dbc/ggz/client/{client_id}/zorgtrajecten | 
[**dbcGgzZorgtrajectAPIById**](DbcGgzZorgtrajectApi.md#dbcGgzZorgtrajectAPIById) | **GET** /v0/dbc/ggz/zorgtraject/{id} | Fetch a zorgtraject
[**dbcGgzZorgtrajectAPICreate**](DbcGgzZorgtrajectApi.md#dbcGgzZorgtrajectAPICreate) | **POST** /v0/dbc/ggz/zorgtraject | Create Zorgtraject

<a name="dbcGgzZorgtrajectAPIByClient"></a>
# **dbcGgzZorgtrajectAPIByClient**
> DbcGgzListZorgtrajectList dbcGgzZorgtrajectAPIByClient(clientId)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzZorgtrajectApi();
let clientId = 789; // Number | 

apiInstance.dbcGgzZorgtrajectAPIByClient(clientId, (error, data, response) => {
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
 **clientId** | **Number**|  | 

### Return type

[**DbcGgzListZorgtrajectList**](DbcGgzListZorgtrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzZorgtrajectAPIById"></a>
# **dbcGgzZorgtrajectAPIById**
> DbcGgzZorgtraject dbcGgzZorgtrajectAPIById(id)

Fetch a zorgtraject

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzZorgtrajectApi();
let id = 789; // Number | used for selecting Zorgtraject

apiInstance.dbcGgzZorgtrajectAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting Zorgtraject | 

### Return type

[**DbcGgzZorgtraject**](DbcGgzZorgtraject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzZorgtrajectAPICreate"></a>
# **dbcGgzZorgtrajectAPICreate**
> DbcGgzZorgtraject dbcGgzZorgtrajectAPICreate(body)

Create Zorgtraject

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzZorgtrajectApi();
let body = new NedapOnsApi.DbcGgzZorgtraject(); // DbcGgzZorgtraject | Zorgtraject to create

apiInstance.dbcGgzZorgtrajectAPICreate(body, (error, data, response) => {
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
 **body** | [**DbcGgzZorgtraject**](DbcGgzZorgtraject.md)| Zorgtraject to create | 

### Return type

[**DbcGgzZorgtraject**](DbcGgzZorgtraject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

