Kullanılan Teknolojiler
	•	React
	•	TypeScript
	•	Redux Toolkit
	•	Axios
	•	JSON Server
	•	sessionStorage (cache için)
	•	Bootstrap

Yapılanlar
	•	Kullanıcı giriş (login) ve hesap oluşturma (register) ekranları oluşturuldu.(Endpoint olmadığı için basit bir server ile yazdım . Tabi ki güvenlik yok.)
	•	Kullanıcı verileri global state (Redux) ile yönetildi.
	•	Giriş yapan kullanıcı localStorage ile saklandı (end point olmadığı için token kullanamadım).
	•	Blog listeleme ekranı yapıldı.
	•	Blog oluşturma (create post) ekranı yapıldı.
	•	Bloglar tarihe göre sıralandı (en yeni en üstte).
	•	Bloglar listelenirken yazar adı gösterildi.
	•	Yazar adı için her blog satırında GET /users?id=x isteği yapıldı.
	•	Yapılan istekler 30 dakika boyunca sessionStorage üzerinden cache’lendi.
	•	Cache sistemi interceptor olarak axios’a entegre edildi.
	•	Blog oluşturulduğunda ilgili cache temizlendi.
	•	Giriş yapmadan blog oluşturma sayfasına erişim engellendi.
	•	Stil yapısı sade tutuldu, input ve button stilleri ortaklaştırıldı.

Kurulum ve Başlatma 

    Projeyi klonlayın:
        git clone https://github.com/kadirkuzu/react_blog-app.git
        cd react_blog-app
        npm install

    JSON Server’ı başlatın:
        json-server --watch data.json --port 3001 (Kurulu değilse json-server kurulmalı)
    
    Uygulamayı çalıştırın:
        npm start