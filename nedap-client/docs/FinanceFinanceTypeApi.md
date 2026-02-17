# NedapOnsApi.FinanceFinanceTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeFinanceTypeAPIById**](FinanceFinanceTypeApi.md#financeFinanceTypeAPIById) | **GET** /v0/administration/finance/finance_types/{id} | Return the Finance Type corresponding to the given id
[**financeFinanceTypeAPIStreamAll**](FinanceFinanceTypeApi.md#financeFinanceTypeAPIStreamAll) | **GET** /v0/xstream/finance_types/data | Return all FinanceType models in a streaming manner
[**financeFinanceTypeAPIStreamUpdates**](FinanceFinanceTypeApi.md#financeFinanceTypeAPIStreamUpdates) | **GET** /v0/xstream/finance_types/updates | Return all FinanceType models which where updated since the date given in the request.

<a name="financeFinanceTypeAPIById"></a>
# **financeFinanceTypeAPIById**
> FinanceFinanceType financeFinanceTypeAPIById(id)

Return the Finance Type corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceFinanceTypeApi();
let id = 789; // Number | used for selecting FinanceType

apiInstance.financeFinanceTypeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting FinanceType | 

### Return type

[**FinanceFinanceType**](FinanceFinanceType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeFinanceTypeAPIStreamAll"></a>
# **financeFinanceTypeAPIStreamAll**
> FinanceListFinanceTypeList financeFinanceTypeAPIStreamAll()

Return all FinanceType models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceFinanceTypeApi();
apiInstance.financeFinanceTypeAPIStreamAll((error, data, response) => {
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

[**FinanceListFinanceTypeList**](FinanceListFinanceTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="financeFinanceTypeAPIStreamUpdates"></a>
# **financeFinanceTypeAPIStreamUpdates**
> FinanceListFinanceTypeList financeFinanceTypeAPIStreamUpdates(since)

Return all FinanceType models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceFinanceTypeApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.financeFinanceTypeAPIStreamUpdates(since, (error, data, response) => {
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
 **since** | **Date**|  | 

### Return type

[**FinanceListFinanceTypeList**](FinanceListFinanceTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

