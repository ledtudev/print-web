# Dự án Hệ thống In ấn & Thiết kế (Inthudo.com)

## 1. Tổng quan Dự án (Project Overview)
Dự án nhằm xây dựng một hệ thống quản lý và hiển thị nội dung cho xưởng in ấn/thiết kế, tập trung vào tính chân thực (Authenticity). Loại bỏ sự phụ thuộc vào AI, tập trung vào hình ảnh thực tế sản phẩm hàng ngày.

*   **Triết lý**: "Web là nơi hiển thị (Gallery/Timeline), App là nơi điều khiển (Controller/CMS)."
*   **Phong cách**: Nhật ký sản xuất (Production Diary) - Đơn giản, Tin cậy, Thực tế.

## 2. Công nghệ (Tech Stack)
Theo yêu cầu của bạn, hệ thống sẽ sử dụng các công nghệ hiện đại và mạnh mẽ nhất:

*   **Mobile App (Controller)**: **Flutter**.
    *   *Lý do*: Build được cho cả Android & iOS, giao diện đẹp, mượt mà, truy cập Camera dễ dàng.
*   **Web (Display)**: **Next.js (React)**.
    *   *Lý do*: Tốt cho SEO (quan trọng để khách tìm thấy web), render nhanh, giao diện hiện đại.
*   **Backend (Core)**: **NestJS**.
    *   *Lý do*: Cấu trúc rõ ràng, dễ bảo trì, mạnh mẽ để xử lý logic API.
*   **Database & Storage**: **Supabase**.
    *   *Lý do*: Database PostgreSQL cực mạnh, có sẵn Storage để lưu ảnh/video, Realtime tốt, có hỗ trợ lắng nghe database thay đổi.

## 3. Mô hình & Nguyên lý hoạt động (Architecture & Protocol)

**Quy trình dữ liệu (Data Flow):**

1.  **Bước 1 (Trên App)**:
    *   Bạn mở App, chụp ảnh sản phẩm vừa in xong.
    *   Viết vài dòng mô tả (Caption).
    *   Bấn "Đăng". App sẽ gọi API lên **NestJS** hoặc gửi thẳng vào **Supabase**.
2.  **Bước 2 (Tại Server)**:
    *   Hệ thống lưu ảnh vào kho chứa (Storage Bucket).
    *   Hệ thống lưu bài viết vào bảng dữ liệu (Database Table `posts`).
3.  **Bước 3 (Trên Web)**:
    *   Web (Next.js) nhận được tín hiệu có dữ liệu mới (hoặc tự động lấy dữ liệu mới mỗi khi người dùng truy cập).
    *   Web hiển thị bài viết đó lên trang chủ dưới dạng Timeline.

## 4. Thiết kế Cơ sở dữ liệu (Database Schema)

## 5. Kế hoạch triển khai (Implementation Plan)

### Giai đoạn 1: Khởi tạo & Backend (Foundation)
*   [ ] Thiết lập Supabase Project (Database + Storage).
*   [ ] Khởi tạo dự án NestJS (Backend API).
*   [ ] Viết API: Upload ảnh, Tạo bài viết (CRUD Posts).

### Giai đoạn 2: Web hiển thị (The Face)
*   [ ] Khởi tạo Next.js Project.
*   [ ] Thiết kế giao diện Timeline (giống Facebook/Instagram nhưng tối giản cho In ấn).
*   [ ] Kết nối API để hiển thị danh sách bài viết từ Supabase.

### Giai đoạn 3: Mobile App (The Controller)
*   [ ] Khởi tạo Flutter Project.
*   [ ] Chức năng: Chụp ảnh/Chọn ảnh từ thư viện.
*   [ ] Chức năng: Viết Caption & Post lên API.
*   [ ] (Nâng cao) Chỉnh sửa ảnh cơ bản trước khi up.

---
*File này được tạo tự động bởi trợ lý AI để định hướng phát triển dự án.*
