# Weather API Documentation

## Endpoints :

// RAW NEEDED
- masuk ke router "/" di client mengarah ke homepage
- di methode homapage ada created() yg menjalankan action di store dimana action ini pertama melakukan GET http req ke:
  - Ip API dapet response berupa ip dan long, lat (req.body)
  - di chaining langsung ke GET http req ke server dulu masuk   ke routes server dengan tujuan "heroku/weather" di bawa ke controller terus langsung di response JSON berupa 
- get weather today
- get weather 5 days

- untuk search beda router di client nanti nembaknya beda Action di store karena payload yg sekarang bawa filter serach by nama kota / negara (req.body)

List of available endpoints :
1. `GET /weather` 
2. `GET /weather`
3.
