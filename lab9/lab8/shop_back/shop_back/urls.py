from django.http import HttpResponse
from django.contrib import admin
from django.urls import path, include

<<<<<<< HEAD
def home(request):  
    return HttpResponse("API работает 🚀")

urlpatterns = [
    path('', home),
=======
def home(request):
    return HttpResponse("API is running 🚀")

urlpatterns = [
    path('', home),  # 👈 add this
>>>>>>> fec67e18 (lab10)
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]