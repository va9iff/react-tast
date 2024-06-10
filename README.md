```sh
git clone --depth 1 https://github.com/va9iff/react-tast.git
cd 	react-tast
npm install
npm run dev
```


1. Səhifədə login üçün inputlar olmalıdır və sistemə daxil olduqda sol menu və əsas content açılmalıdır.
2. Sol menuda 3 bölmə olmalıdır: Universitetlər, Məktəblər, Liseylər, sağ tərəfdə isə seçilən route uyğun kontent açılmalıdır
3. Kontent hissəsində hər 3-nün yuxarısında filter olmalıdır və bu filter componenti elə yazılmalıdır ki, gələcəkdə 30 səhifəyə də tətbiq olunarsa hamısı üçün yararlı olsun
4. Bu səhifələrin filterlərində, selectlər, number, date və text inputu kimi filterlər və bu filterləri təmizləmək üçün ayrıca bir düymə olmalıdır
5. Filterləri seçərkən, yazarkən və ya dəyərini dəyişərkən backendə sorğu getməlidir
6. Universitelər səhifəsində məlumatların list kimi göstərilməsi cədvəlində Korpus sütutunda hər bir sətirdə bax düyməsi olmalıdır və ona klikləyəndə həmin universitetin korpuslarının listli modalda açılmalıdır
7. Hər bir səhifədə Universitet, Məktəb və ya Lisey itemini siləndə confirm dialog açılmalıdır və bu confirm dialog custom component kimi yazılmalıdır
8. Servis kimi mock apilər istifadə edilə bilər

---

Fərqli səhifələrdə fərqli filterlər olacaq, misal üçün universitetlərdə universitetin yaranma ili, regiona görə axtarış  olacaq. Yəni hər səhifənin filter filedləri fərqli olmalıdır.
Burada lisey, universitet və məktəb var. Elə filedlər olmalıdır ki, hərəsinin öz individual filteri olsun.
Və bu filter componenti hamısı üçün işləyən bir component olsun.