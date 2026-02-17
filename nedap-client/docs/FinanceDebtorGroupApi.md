# NedapOnsApi.FinanceDebtorGroupApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**financeDebtorGroupAPIAll**](FinanceDebtorGroupApi.md#financeDebtorGroupAPIAll) | **GET** /v0/finance/debtorGroups | Returns every DebtorGroup available from the DebtorGroupAPI
[**financeDebtorGroupAPIByDebtorId**](FinanceDebtorGroupApi.md#financeDebtorGroupAPIByDebtorId) | **GET** /v0/finance/debtorGroups/byDebtorId/{debtor_id} | Return a DebtorGroupsList for which holds that every DebtorGroup contains debtorId
[**financeDebtorGroupAPIById**](FinanceDebtorGroupApi.md#financeDebtorGroupAPIById) | **GET** /v0/finance/debtorGroups/{id} | Retrieve debtor group by id

<a name="financeDebtorGroupAPIAll"></a>
# **financeDebtorGroupAPIAll**
> FinanceListDebtorGroupList financeDebtorGroupAPIAll()

Returns every DebtorGroup available from the DebtorGroupAPI

Returns every DebtorGroup available from the DebtorGroupAPI

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDebtorGroupApi();
apiInstance.financeDebtorGroupAPIAll((error, data, response) => {
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

[**FinanceListDebtorGroupList**](FinanceListDebtorGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeDebtorGroupAPIByDebtorId"></a>
# **financeDebtorGroupAPIByDebtorId**
> FinanceListDebtorGroupList financeDebtorGroupAPIByDebtorId(debtorId)

Return a DebtorGroupsList for which holds that every DebtorGroup contains debtorId

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDebtorGroupApi();
let debtorId = 789; // Number | the debtorId that should fall in the returned debtor groups

apiInstance.financeDebtorGroupAPIByDebtorId(debtorId, (error, data, response) => {
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
 **debtorId** | **Number**| the debtorId that should fall in the returned debtor groups | 

### Return type

[**FinanceListDebtorGroupList**](FinanceListDebtorGroupList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="financeDebtorGroupAPIById"></a>
# **financeDebtorGroupAPIById**
> FinanceDebtorGroup financeDebtorGroupAPIById(id)

Retrieve debtor group by id

Retrieve debtor group by id

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.FinanceDebtorGroupApi();
let id = 789; // Number | used for selecting DebtorGroup

apiInstance.financeDebtorGroupAPIById(id, (error, data, response) => {
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
 **id** | **Number**| used for selecting DebtorGroup | 

### Return type

[**FinanceDebtorGroup**](FinanceDebtorGroup.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

