# NedapOnsApi.AdminLogoImageApi

All URIs are relative to *https://api-development.ons.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminLogoImageAPIDownload**](AdminLogoImageApi.md#adminLogoImageAPIDownload) | **GET** /v0/administration/admin/logo_image/download | Download logo image.
[**adminLogoImageAPIGet**](AdminLogoImageApi.md#adminLogoImageAPIGet) | **GET** /v0/administration/admin/logo_image | Retrieves the LogoImage

<a name="adminLogoImageAPIDownload"></a>
# **adminLogoImageAPIDownload**
> &#x27;Blob&#x27; adminLogoImageAPIDownload()

Download logo image.

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AdminLogoImageApi();
apiInstance.adminLogoImageAPIDownload((error, data, response) => {
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

**&#x27;Blob&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg

<a name="adminLogoImageAPIGet"></a>
# **adminLogoImageAPIGet**
> AdminLogoImage adminLogoImageAPIGet()

Retrieves the LogoImage

### Example
```javascript
import {NedapOnsApi} from 'nedap_ons_api';

let apiInstance = new NedapOnsApi.AdminLogoImageApi();
apiInstance.adminLogoImageAPIGet((error, data, response) => {
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

[**AdminLogoImage**](AdminLogoImage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

