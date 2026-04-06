<<<<<<< HEAD
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, ProductViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

urlpatterns = router.urls
=======
from django.urls import path
from .views import *

urlpatterns = [
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),

    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]
>>>>>>> fec67e18 (lab10)
