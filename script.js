/* =========================
   모달
========================= */

.modal {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: none;              /* 기본 숨김 */
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 40px 60px;
    border-radius: 12px;
    text-align: center;
    animation: slideUp 0.4s ease forwards;
}

.modal-content p {
    margin-bottom: 20px;
    font-size: 16px;
}

.modal-content button {
    background: #111;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
}
