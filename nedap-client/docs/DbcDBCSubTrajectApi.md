# NedapOnsApi.DbcDBCSubTrajectApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbcDBCSubTrajectAPIByDBCTrajectId**](DbcDBCSubTrajectApi.md#dbcDBCSubTrajectAPIByDBCTrajectId) | **GET** /v0/administration/dbc/dbc_trajects/{dbc_traject_id}/dbc_sub_trajects | Return the DBCSubTrajects of a DBCTraject corresponding to the given id.
[**dbcDBCSubTrajectAPIById**](DbcDBCSubTrajectApi.md#dbcDBCSubTrajectAPIById) | **GET** /v0/administration/dbc/dbc_sub_trajects/{id} | 
[**dbcDBCSubTrajectAPIByPeriod**](DbcDBCSubTrajectApi.md#dbcDBCSubTrajectAPIByPeriod) | **GET** /v0/administration/dbc/dbc_sub_trajects/in_period | Return all dbc subtrajects that have been active at any time in the requested period

<a name="dbcDBCSubTrajectAPIByDBCTrajectId"></a>
# **dbcDBCSubTrajectAPIByDBCTrajectId**
> DbcListDBCSubTrajectList dbcDBCSubTrajectAPIByDBCTrajectId(dbcTrajectId)

Return the DBCSubTrajects of a DBCTraject corresponding to the given id.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcDBCSubTrajectApi();
let dbcTrajectId = 789; // Number | 

apiInstance.dbcDBCSubTrajectAPIByDBCTrajectId(dbcTrajectId, (error, data, response) => {
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
 **dbcTrajectId** | **Number**|  | 

### Return type

[**DbcListDBCSubTrajectList**](DbcListDBCSubTrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcDBCSubTrajectAPIById"></a>
# **dbcDBCSubTrajectAPIById**
> DbcDBCSubTraject dbcDBCSubTrajectAPIById(id, opts)



### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcDBCSubTrajectApi();
let id = 789; // Number | used for selecting DBCSubTraject
let opts = { 
  'include': ["include_example"], // [String] | 
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dbcDBCSubTrajectAPIById(id, opts, (error, data, response) => {
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
 **id** | **Number**| used for selecting DBCSubTraject | 
 **include** | [**[String]**](String.md)|  | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DbcDBCSubTraject**](DbcDBCSubTraject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcDBCSubTrajectAPIByPeriod"></a>
# **dbcDBCSubTrajectAPIByPeriod**
> DbcListDBCSubTrajectList dbcDBCSubTrajectAPIByPeriod(opts)

Return all dbc subtrajects that have been active at any time in the requested period

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcDBCSubTrajectApi();
let opts = { 
  'validFrom': new Date("2013-10-20"), // Date | begindate of the period (inclusive)
  'validTo': new Date("2013-10-20"), // Date | enddate of the period (exclusive)
  'xCupidoUserName': "xCupidoUserName_example", // String | 
  'xCupidoActiveIdentity': "xCupidoActiveIdentity_example" // String | 
};
apiInstance.dbcDBCSubTrajectAPIByPeriod(opts, (error, data, response) => {
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
 **validFrom** | **Date**| begindate of the period (inclusive) | [optional] 
 **validTo** | **Date**| enddate of the period (exclusive) | [optional] 
 **xCupidoUserName** | **String**|  | [optional] 
 **xCupidoActiveIdentity** | **String**|  | [optional] 

### Return type

[**DbcListDBCSubTrajectList**](DbcListDBCSubTrajectList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

