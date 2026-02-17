# NedapOnsApi.BankAccountApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bankAccountAPIByClientId**](BankAccountApi.md#bankAccountAPIByClientId) | **GET** /v0/administration/clients/{client_id}/bank_account | Return the BankAccount of a client based on the clientId.
[**bankAccountAPIStreamAll**](BankAccountApi.md#bankAccountAPIStreamAll) | **GET** /v0/xstream/bank_accounts/data | Return all BankAccount models in a streaming manner
[**bankAccountAPIStreamUpdates**](BankAccountApi.md#bankAccountAPIStreamUpdates) | **GET** /v0/xstream/bank_accounts/updates | Return all BankAccount models which where updated since the date given in the request.

<a name="bankAccountAPIByClientId"></a>
# **bankAccountAPIByClientId**
> BankAccount bankAccountAPIByClientId(clientId)

Return the BankAccount of a client based on the clientId.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.BankAccountApi();
let clientId = 789; // Number | 

apiInstance.bankAccountAPIByClientId(clientId, (error, data, response) => {
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

[**BankAccount**](BankAccount.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="bankAccountAPIStreamAll"></a>
# **bankAccountAPIStreamAll**
> ListBankAccountList bankAccountAPIStreamAll()

Return all BankAccount models in a streaming manner

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.BankAccountApi();
apiInstance.bankAccountAPIStreamAll((error, data, response) => {
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

[**ListBankAccountList**](ListBankAccountList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

<a name="bankAccountAPIStreamUpdates"></a>
# **bankAccountAPIStreamUpdates**
> ListBankAccountList bankAccountAPIStreamUpdates(since)

Return all BankAccount models which where updated since the date given in the request.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.BankAccountApi();
let since = new Date("2013-10-20T19:20:30+01:00"); // Date | 

apiInstance.bankAccountAPIStreamUpdates(since, (error, data, response) => {
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

[**ListBankAccountList**](ListBankAccountList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/x-ndjson

