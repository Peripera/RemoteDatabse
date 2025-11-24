import { createContact, subscribeToContacts } from '../models/contactMod';
import { logError, logInfo } from '../utils/logger';

export async function handleCreateContact({ IDStudent, Name,Semester }) {
  const tag = 'ContactController:create';

  // Validaciones básicas
  if (!IDStudent || !Name) {
    const msg = 'Nombre y matrícula son obligatorios';
    logError(tag, msg);
    throw new Error(msg);
  }

  const semesterNo = Number(Semester);
  if (Number.isNaN(semesterNo) || semesterNo <= 0) {
    const msg = 'Usa un número válido';
    logError(tag, msg);
    throw new Error(msg);
  }

  try {
    const id = await createContact({ 
      IDStudent, Name, Semester: semesterNo });
    logInfo(tag, 'Contacto creado correctamente', { id, IDStudent, Name });
    return id;
  } catch (error) {
    logError(tag, 'Error al crear el contacto', error);
    throw new Error('No se pudo guardar el contacto. Intenta mas tarde.');
  }
}

export function observeContacts(onContacts, onError) {
  const tag = 'ContactController:observe';

  return subscribeToContacts(
    (items) => {
      logInfo(tag, 'Se recibieron contactos', {
        count: items.length,
      });
      onContacts(items);
    },
    (error) => {
      logError(tag, 'Error al buscar contactos', error);
      if (onError) {
        onError(new Error('Error al cargar los datos remotos'));
      }
    }
  );
}
