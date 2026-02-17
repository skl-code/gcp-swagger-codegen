# NedapOnsApi.DbcDBCTrajectApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbcDBCTrajectAPIByClientId**](DbcDBCTrajectApi.md#dbcDBCTrajectAPIByClientId) | **GET** /v0/administration/dbc/dbc_trajects/by_client/{client_id} | Return the dbc trajects of a Client corresponding to the given id.
[**dbcDBCTrajectAPIById**](DbcDBCTrajectApi.md#dbcDBCTrajectAPIById) | **GET** /v0/administration/dbc/dbc_trajects/{id} | 

<a name="dbcDBCTrajectAPIByClientId"></a>
# **dbcDBCTrajectAPIByClientId**
> DbcListDBCTrajectList dbcDBCTrajectAPIByClientId(clientId)

Return the dbc trajects of a Client corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcDBCTrajectApi();
let clientId = 789; // Number | id

apiInstance.dbcDBCTrajectAPIByClientId(clientId, (error, data, response) => {
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

[**DbcListDBCTrajectList**](DbcListDBCTrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcDBCTrajectAPIById"></a>
# **dbcDBCTrajectAPIById**
> DbcDBCTraject dbcDBCTrajectAPIById(id, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcDBCTrajectApi();
let id = 789; // Number | used for selecting DBCTraject
let opts = { 
  'include': ["include_example"], // [String] | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dbcDBCTrajectAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting DBCTraject | 
 **include** | [**[String]**](String.md)|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DbcDBCTraject**](DbcDBCTraject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

