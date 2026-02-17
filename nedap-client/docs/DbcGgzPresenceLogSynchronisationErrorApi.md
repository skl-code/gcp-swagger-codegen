# NedapOnsApi.DbcGgzPresenceLogSynchronisationErrorApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dbcGgzPresenceLogSynchronisationErrorAPIById**](DbcGgzPresenceLogSynchronisationErrorApi.md#dbcGgzPresenceLogSynchronisationErrorAPIById) | **GET** /v0/dbc/presencelog_sync_error/{id} | Fetch a synchronization error
[**dbcGgzPresenceLogSynchronisationErrorAPIByPeriod**](DbcGgzPresenceLogSynchronisationErrorApi.md#dbcGgzPresenceLogSynchronisationErrorAPIByPeriod) | **GET** /v0/dbc/presencelog_sync_error/in_period | Fetches a number (&#x27;limit&#x27;) of presencelog syncrhonisation errors from ons-dbc having the creation date between validFrom and validTo and updatedAt set to within the last hour (to only fetch errors that are still relevant)

<a name="dbcGgzPresenceLogSynchronisationErrorAPIById"></a>
# **dbcGgzPresenceLogSynchronisationErrorAPIById**
> DbcGgzPresenceLogSynchronisationError dbcGgzPresenceLogSynchronisationErrorAPIById(id)

Fetch a synchronization error

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzPresenceLogSynchronisationErrorApi();
let id = 789; // Number | used for selecting PresenceLogSynchronisationError

apiInstance.dbcGgzPresenceLogSynchronisationErrorAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting PresenceLogSynchronisationError | 

### Return type

[**DbcGgzPresenceLogSynchronisationError**](DbcGgzPresenceLogSynchronisationError.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="dbcGgzPresenceLogSynchronisationErrorAPIByPeriod"></a>
# **dbcGgzPresenceLogSynchronisationErrorAPIByPeriod**
> DbcGgzListPresenceLogSynchronisationErrorList dbcGgzPresenceLogSynchronisationErrorAPIByPeriod(validFrom, validTo, limit, offset)

Fetches a number (&#x27;limit&#x27;) of presencelog syncrhonisation errors from ons-dbc having the creation date between validFrom and validTo and updatedAt set to within the last hour (to only fetch errors that are still relevant)

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.DbcGgzPresenceLogSynchronisationErrorApi();
let validFrom = new Date("2013-10-20"); // Date | createdAt >= validFrom (start of day)
let validTo = new Date("2013-10-20"); // Date | createdAt <= validTo (end of day)
let limit = 789; // Number | number of results to return
let offset = 789; // Number | index of first result returned

apiInstance.dbcGgzPresenceLogSynchronisationErrorAPIByPeriod(validFrom, validTo, limit, offset, (error, data, response) => {
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
 **validFrom** | **Date**| createdAt &gt;&#x3D; validFrom (start of day) | 
 **validTo** | **Date**| createdAt &lt;&#x3D; validTo (end of day) | 
 **limit** | **Number**| number of results to return | 
 **offset** | **Number**| index of first result returned | 

### Return type

[**DbcGgzListPresenceLogSynchronisationErrorList**](DbcGgzListPresenceLogSynchronisationErrorList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

