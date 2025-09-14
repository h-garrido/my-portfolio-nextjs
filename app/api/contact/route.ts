import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { nombre, email, mensaje, turnstileToken } = await request.json();

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son obligatorios' },
        { status: 400 }
      );
    }

    // Validación de longitud para prevenir ataques
    if (nombre.length > 100 || email.length > 100 || mensaje.length > 1000) {
      return NextResponse.json(
        { error: 'Datos exceden límite permitido' },
        { status: 400 }
      );
    }

    // Sanitización básica - remover caracteres peligrosos
    const sanitize = (str: string) => str.replace(/[<>]/g, '').trim();
    const nombreSanitized = sanitize(nombre);
    const mensajeSanitized = sanitize(mensaje);

    // Validación de Turnstile
    if (!turnstileToken) {
      return NextResponse.json(
        { error: 'Token de verificación requerido' },
        { status: 400 }
      );
    }

    // Verificar token de Turnstile con Cloudflare
    const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.TURNSTILE_SECRET_KEY}&response=${turnstileToken}`,
    });

    const turnstileResult = await turnstileResponse.json();
    if (!turnstileResult.success) {
      return NextResponse.json(
        { error: 'Verificación de seguridad fallida' },
        { status: 400 }
      );
    }

    // Validación de email más robusta
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Rate limiting básico por IP (opcional)
    // const userIP = request.headers.get('x-forwarded-for') || 'unknown';

    // Validar que no contenga URLs sospechosas (anti-spam)
    const suspiciousPatterns = /https?:\/\/|www\.|\.com|\.net|\.org/i;
    if (suspiciousPatterns.test(nombreSanitized) || suspiciousPatterns.test(mensajeSanitized)) {
      return NextResponse.json(
        { error: 'Contenido no permitido detectado' },
        { status: 400 }
      );
    }

    // Aquí más tarde puedes agregar:
    // 1. Envío de email (usando Nodemailer, Resend, etc.)
    // 2. Guardado en base de datos
    
    // Por ahora, simular guardado exitoso
    // console.log('Datos recibidos:', { nombre, email, mensaje, timestamp: new Date() });

    // TODO: Implementar envío de email
    // TODO: Implementar guardado en base de datos

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente. Te contactaré pronto!' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error al procesar formulario:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}