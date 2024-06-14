### REACT HOOKS

## Task1 - Sadə Sayğac
Məqsəd: Bir buttona kliklədikdə sayğacı bir artırın.

Bir Counter komponenti yaradın.
useState istifadə edərək bir count state'i yaradın və başlanğıc dəyərini 0 qoyun.
Bir button əlavə edin və buttona kliklədikdə count state'ini bir artıran bir funksiya yazın.
count dəyərini ekranda göstərin.


## Task2 - Form Məlumatlarının İdarə Edilməsi
Məqsəd: İstifadəçinin daxil etdiyi form məlumatlarını idarə edin.

Bir Form komponenti yaradın.
useState istifadə edərək name və email adında iki state yaradın.
Bir form yaradın və iki input sahəsi əlavə edin; biri name, digəri email üçün.
İstifadəçi input sahələrinə nəsə yazdıqda müvafiq state'i yeniləyin.
Form təqdim edildikdə (submit), name və email dəyərlərini konsola yazdırın.


## Task3 - useEffect ilə API Çağırışı
Məqsəd: Komponent yükləndikdə API-dən məlumat çəkin və ekranda göstərin.

Bir DataFetcher komponenti yaradın.
useState istifadə edərək data və loading adında iki state yaradın.
useEffect istifadə edərək komponent yükləndikdə bir API çağırışı edin (məsələn, JSONPlaceholder-dan məlumat çəkin).
API-dən gələn məlumatı data state'inə qeyd edin və loading state'ini false edin.
loading state'i true olduqda "Yüklənir..." mesajı göstərin; məlumat yükləndikdə data dəyərini ekranda göstərin.


## Task4 - Dinamik Tema Dəyişikliyi
Məqsəd: İstifadəçinin seçdiyi temaya görə tətbiqin temasını dəyişin.

Bir ThemeSwitcher komponenti yaradın.
useState istifadə edərək theme adında bir state yaradın (başlanğıc dəyəri "light" ola bilər).
İki button əlavə edin: biri "İşıq Teması", digəri "Qaranlıq Tema" üçün.
Buttonlara kliklədikdə theme state'ini "light" və ya "dark" olaraq yeniləyən funksiyalar yazın.
theme state'inə görə səhifənin fon rəngini dəyişin.


## Task5 - Audio İdarəetmə ilə useRef
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


