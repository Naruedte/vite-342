export function getImageUrl(person, size = 's') {
    return (
      'https://image.makewebcdn.com/makeweb/m_1920x0/tA55cdrj0/DefaultData/%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%80%E0%B8%94%E0%B9%89%E0%B8%87.png?v=202405291424' +
      person.imageId +
      size +
      '.jpg'
    );
  }
  