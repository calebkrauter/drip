export function scollNav(targetId: string) {
  if (targetId === 'home-button' || targetId === 'ck-home-button') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
