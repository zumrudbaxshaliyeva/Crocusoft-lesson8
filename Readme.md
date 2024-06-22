# React + TypeScript + Vite + Yarn(PM)

### REACT HOOKS


## Task1 - Form Məlumatlarının İdarə Edilməsi
Məqsəd: İstifadəçinin daxil etdiyi form məlumatlarını idarə edin.

Bir Form komponenti yaradın.
useState istifadə edərək name və email adında iki state yaradın.
Bir form yaradın və iki input sahəsi əlavə edin; biri name, digəri email üçün.
İstifadəçi input sahələrinə nəsə yazdıqda müvafiq state'i yeniləyin.
Form təqdim edildikdə (submit), name və email dəyərlərini konsola yazdırın.



## Task2 - Dinamik Tema Dəyişikliyi
Məqsəd: İstifadəçinin seçdiyi temaya görə tətbiqin temasını dəyişin.

Bir ThemeSwitcher komponenti yaradın.
useState istifadə edərək theme adında bir state yaradın (başlanğıc dəyəri "light" ola bilər).
İki button əlavə edin: biri "İşıq Teması", digəri "Qaranlıq Tema" üçün.
Buttonlara kliklədikdə theme state'ini "light" və ya "dark" olaraq yeniləyən funksiyalar yazın.
theme state'inə görə səhifənin fon rəngini dəyişin.


## Task3 - Audio İdarəetmə ilə useRef
Məqsəd:
Bir audio faylını idarə etmək üçün useRef hook'unu istifadə edin və müxtəlif düymələr vasitəsilə audionu nəzarət edin.

Təlimatlar:
AudioPlayer adında bir komponent yaradın.
useRef istifadə edərək bir audio elementi üçün referans yaradın.
Beş düymə və bir input sahəsi əlavə edin:
"10 saniyə geri" (audioyu 10 saniyə geri sarmaq üçün)
"10 saniyə irəli" (audioyu 10 saniyə irəli sarmaq üçün)
"3x sürət" (audioyu 3x sürətlə oynatmaq üçün)
"4x sürət" (audioyu 4x sürətlə oynatmaq üçün)
"Sürəti təyin et" (input sahəsinə daxil edilən dəyərə görə audio sürətini dəyişmək üçün)


## Task4 - Modal İdarəetməsi
Məqsəd: useRef istifadə edərək bir modal pəncərəsini açın və bağlayın.

Bir ModalManager komponenti yaradın.
useRef istifadə edərək modal pəncərəsi üçün referans yaradın.
İki düymə yaradın:
"Modalı Aç" (modal pəncərəsini göstərmək üçün)
"Modalı Bağla" (modal pəncərəsini gizlətmək üçün)
Modal pəncərəsini stil ilə gizlədin və göstərin.


## Task5 - Timer
Məqsəd: useRef istifadə edərək bir timer (zamanölçən) yaradın.

Bir Timer komponenti yaradın.
useRef istifadə edərək timer dəyərini və setInterval üçün bir referans yaradın.
İki düymə yaradın:
"Başla" (timeri başlatmaq üçün)
"Dayandır" (timeri dayandırmaq üçün)
Timer dəyərini göstərən bir p elementini yaradın.