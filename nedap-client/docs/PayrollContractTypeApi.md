# NedapOnsApi.PayrollContractTypeApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**payrollContractTypeAPIById**](PayrollContractTypeApi.md#payrollContractTypeAPIById) | **GET** /v0/administration/contract_types/{id} | Return the Contract Type corresponding to the given id
[**payrollContractTypeAPIStreamAll**](PayrollContractTypeApi.md#payrollContractTypeAPIStreamAll) | **GET** /v0/xstream/contract_types/data | Return all ContractType models in a streaming manner

<a name="payrollContractTypeAPIById"></a>
# **payrollContractTypeAPIById**
> PayrollContractType payrollContractTypeAPIById(id)

Return the Contract Type corresponding to the given id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollContractTypeApi();
let id = 789; // Number | used for selecting ContractType

apiInstance.payrollContractTypeAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting ContractType | 

### Return type

[**PayrollContractType**](PayrollContractType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="payrollContractTypeAPIStreamAll"></a>
# **payrollContractTypeAPIStreamAll**
> PayrollListContractTypeList payrollContractTypeAPIStreamAll()

Return all ContractType models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.PayrollContractTypeApi();
apiInstance.payrollContractTypeAPIStreamAll((error, data, response) => {
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

[**PayrollListContractTypeList**](PayrollListContractTypeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

